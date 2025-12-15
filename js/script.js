function toggleOutro(select, inputId) {
  const input = document.getElementById(inputId);
  if (select.value === "outro") {
    input.style.display = "block";
    input.focus();
  } else {
    input.style.display = "none";
    input.value = "";
  }
}
