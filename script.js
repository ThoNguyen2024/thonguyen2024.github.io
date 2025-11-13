// script.js

document.addEventListener('DOMContentLoaded', () => {
    // 1. Logic cho nút "Đặt Hàng"
    const orderButton = document.getElementById('order-button');
    if (orderButton) {
        orderButton.addEventListener('click', () => {
            // Khi nhấn nút Đặt hàng, chuyển hướng đến trang menu hoặc mở popup liên hệ
            // Hiện tại tôi sẽ chuyển hướng đến phần Menu
            const menuSection = document.getElementById('menu');
            if (menuSection) {
                menuSection.scrollIntoView({ behavior: 'smooth' });
            } else {
                alert('Vui lòng gọi ngay 078.6667333 để đặt hàng!');
                // Trong thực tế, bạn sẽ dùng window.location.href = '/menu.html';
            }
        });
    }

    // 2. Logic cho hiệu ứng cuộn mượt (Scroll Smooth)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // 3. Logic ví dụ: Giỏ hàng (chỉ là placeholder)
    console.log('Drinki T Website Loaded!');

    // *Trong phiên bản nâng cao, bạn sẽ thêm logic cho giỏ hàng, validation form, v.v. tại đây.
});