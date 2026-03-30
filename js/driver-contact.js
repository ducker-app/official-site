const driverNameNode = document.querySelector(".identity-name");
const driverName = driverNameNode && driverNameNode.textContent ? driverNameNode.textContent.trim() : "";
const linkButtons = document.querySelectorAll(".contact-link[data-contact]");
const currentPagePath = window.location.pathname.replace(/[^/]+$/, "");
const contactDialog = document.querySelector("[data-contact-dialog]");
const contactDialogImage = document.querySelector("[data-contact-dialog-image]");
const contactDialogTitle = document.getElementById("contact-dialog-title");
const contactDialogCopy = document.querySelector("[data-contact-dialog-copy]");
const contactDialogCopyLabel = document.querySelector("[data-contact-dialog-copy-label]");
const contactDialogDownload = document.querySelector("[data-contact-dialog-download]");
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
