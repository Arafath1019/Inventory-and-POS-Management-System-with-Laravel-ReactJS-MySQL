import React from "react";

function Footer() {
  return (
    <footer class="py-1 bg-theme mt-auto">
      <div class="container-fluid px-4">
        <div class="d-flex align-items-center justify-content-between small">
          <small class="text-silver">Copyright &copy; Yeasin Arafath {new Date().getFullYear()} | Version: 0.1.0</small>
          <div>
            <small className="text-white">
              Designed & Developed By Yeasin Arafath
            </small>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
