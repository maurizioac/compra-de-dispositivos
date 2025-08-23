<script>
  document.addEventListener("DOMContentLoaded", () => {
    const detalleButtons = document.querySelectorAll(".detalle-btn");

    detalleButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const ciudadItem = button.closest(".ciudades-item");
        ciudadItem.classList.toggle("active");
      });
    });
  });
</script>