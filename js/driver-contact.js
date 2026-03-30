const driverName = document.querySelector(".identity-name")?.textContent?.trim() || "";
const linkButtons = document.querySelectorAll(".contact-link[data-contact]");
const currentPagePath = window.location.pathname.replace(/[^/]+$/, "");
const contactDialog = document.querySelector("[data-contact-dialog]");
const contactDialogImage = document.querySelector("[data-contact-dialog-image]");
const contactDialogTitle = document.getElementById("contact-dialog-title");
const contactDialogCopy = document.querySelector("[data-contact-dialog-copy]");
const contactDialogCopyLabel = document.querySelector("[data-contact-dialog-copy-label]");
const contactDialogDownload = document.querySelector("[data-contact-dialog-download]");
const digitsOnly = (value) => value.replace(/\D/g, "");
const trimHandlePrefix = (value) => value.trim().replace(/^@/, "");
const buildIntlValue = (value, countryCode = "") => {
  const normalizedValue = value.trim();
  const normalizedCountryCode = digitsOnly(countryCode);

  if (normalizedValue.startsWith("+") || !normalizedCountryCode) {
    return normalizedValue;
  }

  const localDigits = digitsOnly(normalizedValue).replace(/^0+/, "");
  return `+${normalizedCountryCode}${localDigits}`;
};

const buildContactMeta = (type, value, countryCode = "") => {
  const intlValue = buildIntlValue(value, countryCode);
  const maps = {
    phone: {
      href: `tel:${intlValue}`,
      linkAriaLabel: `撥打電話給${driverName}`,
      action: "link"
    },
    line: {
      href: `https://line.me/ti/p/${value.replace(/^@/, "")}`,
      linkAriaLabel: `以 LINE 與${driverName}對話`,
      action: "link"
    },
    whatsapp: {
      href: `https://wa.me/${digitsOnly(intlValue)}`,
      linkAriaLabel: `以 WhatsApp 與${driverName}聯絡`,
      action: "link"
    },
    messenger: {
      href: value.startsWith("http") ? value : `https://m.me/${value.replace(/^m\.me\//, "").replace(/^\//, "")}`,
      linkAriaLabel: `以 Facebook Messenger 與${driverName}聯絡`,
      action: "link"
    },
    wechat: {
      href: "weixin://",
      linkAriaLabel: "顯示 WeChat QR code",
      action: "dialog"
    },
    kakaotalk: {
      href: "kakaotalk://",
      linkAriaLabel: "開啟 KakaoTalk",
      action: "link"
    },
    email: {
      href: `mailto:${value}`,
      linkAriaLabel: `寄信給${driverName}`,
      action: "link"
    },
    instagram: {
      href: `https://ig.me/m/${trimHandlePrefix(value)}/`,
      linkAriaLabel: `前往 ${driverName} 的 Instagram`,
      action: "link"
    },
    snapchat: {
      href: `https://www.snapchat.com/add/${trimHandlePrefix(value)}`,
      linkAriaLabel: `前往 ${driverName} 的 Snapchat`,
      action: "link"
    }
  };

  return maps[type] || {
    href: "#",
    linkAriaLabel: "顯示聯絡方式提示",
    action: "copy-only"
  };
};

const buildDialogQrSrc = (type) => {
  if (type === "wechat") {
    return `${currentPagePath}wx.jpg`;
  }

  return "";
};

const buildDialogDownloadName = (type) => {
  if (type === "wechat") {
    return `ducker-駕駛員-${driverName}-wx.jpg`;
  }

  return "contact-image";
};

const openContactDialog = (type, value) => {
  const qrSrc = buildDialogQrSrc(type);

  if (!contactDialog || !contactDialogImage || !contactDialogTitle || !contactDialogCopy || !contactDialogCopyLabel || !contactDialogDownload || !qrSrc) {
    return;
  }

  contactDialogTitle.textContent = type === "wechat" ? "WeChat" : "QR code";
  contactDialogImage.src = qrSrc;
  contactDialogImage.alt = `${contactDialogTitle.textContent} QR code`;
  contactDialogCopy.dataset.copyValue = value;
  contactDialogCopyLabel.textContent = value;
  contactDialogDownload.href = qrSrc;
  contactDialogDownload.setAttribute("download", buildDialogDownloadName(type));
  contactDialog.hidden = false;
  document.body.style.overflow = "hidden";
};

const closeContactDialog = () => {
  if (!contactDialog || contactDialog.hidden) {
    return;
  }

  contactDialog.hidden = true;
  document.body.style.overflow = "";
};

linkButtons.forEach((button) => {
  const contactKey = button.dataset.contact;
  const contactValue = button.dataset.value || "";
  const countryCode = button.dataset.countryCode || "";
  const contact = buildContactMeta(contactKey, contactValue, countryCode);

  if (!contact) {
    return;
  }

  button.href = contact.href;
  button.dataset.action = contact.action;
  button.setAttribute("aria-label", contact.linkAriaLabel);
});

linkButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    if (button.dataset.action === "copy-only") {
      event.preventDefault();
    }
    if (button.dataset.action === "dialog") {
      event.preventDefault();
      openContactDialog(button.dataset.contact, button.dataset.value || "");
    }
  });
});

if (contactDialog) {
  contactDialog.querySelectorAll("[aria-label='關閉 QR code'], [aria-label='關閉']").forEach((target) => {
    target.addEventListener("click", closeContactDialog);
  });

  if (contactDialogCopy) {
    contactDialogCopy.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(contactDialogCopy.dataset.copyValue || "");
        contactDialogCopy.classList.add("is-tipped");
        window.setTimeout(() => {
          contactDialogCopy.classList.remove("is-tipped");
        }, 1200);
      } catch (_error) {
        contactDialogCopy.classList.remove("is-tipped");
      }
    });
  }

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeContactDialog();
    }
  });
}
