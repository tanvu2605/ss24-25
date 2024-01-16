function nhapSoNguyenDuong() {
    while (true) {
        let soNguyen = prompt("Nhập một số nguyên dương:");
        soNguyen = parseInt(soNguyen);

        if (!isNaN(soNguyen) && soNguyen > 0) {
            return soNguyen;
        } else {
            alert("Vui lòng nhập một số nguyên dương hợp lệ.");
        }
    }
}

function inVaTinhTong(soNguyen) {
    let tong = 0;

    for (let i = 1; i <= soNguyen; i++) {
        console.log(i);
        tong += i;
    }

    if (tong % 2 === 1) {
        console.log(`Tổng các số là ${tong} và là số lẻ.`);
    } else {
        console.log(`Tổng các số là ${tong} và không là số lẻ.`);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    let soNguyen = nhapSoNguyenDuong();
    inVaTinhTong(soNguyen);
});
