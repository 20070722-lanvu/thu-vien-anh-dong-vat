// 1. Khởi tạo khi trang web tải xong
window.addEventListener("load", function() {
    console.log("Trang web đã tải hoàn tất!");

    // Lấy tất cả hình ảnh
    let images = document.querySelectorAll(".gallery img");

    // 2. Vòng lặp qua từng hình ảnh
    for (let i = 0; i < images.length; i++) {

        let img = images[i];

        // 3. Thêm thuộc tính tabindex
        img.setAttribute("tabindex", "0");

        // 4. Sự kiện Mouseover
        img.addEventListener("mouseover", function() {
            upDate(this);
        });

        // 5. Sự kiện Mouseleave
        img.addEventListener("mouseleave", function() {
            undo(this);
        });

        // 6. Sự kiện Focus
        img.addEventListener("focus", function() {
            upDate(this);
        });

        // 7. Sự kiện Blur
        img.addEventListener("blur", function() {
            undo(this);
        });
    }
});


// Hàm cập nhật khi di chuột hoặc chọn ảnh
function upDate(element) {
    console.log("Sự kiện được kích hoạt: " + element.alt);

    element.classList.add("active");

    document.getElementById("message").innerHTML =
        "Bạn đang chọn: " + element.alt;
}


// Hàm khôi phục khi rời chuột hoặc bỏ chọn
function undo(element) {
    console.log("Đã rời khỏi: " + element.alt);

    element.classList.remove("active");

    document.getElementById("message").innerHTML =
        "Hãy chọn một hình ảnh để trải nghiệm!";
}