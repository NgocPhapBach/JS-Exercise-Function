/**
 * Khối 1: name, soNguoi, thuNhapNam
 * 
 * Khối 2: 
 * B1: tạo hàm tinhTienDien
 * B2: lấy giá trị từ form: name, soNguoi, thuNhapNam
 * B3: tính thuế thu nhập: thuNhapNam - 4e+6 - soNguoi * 1600000;
 * B3: tính thuế cá nhân
 *      Nếu 0 < thueThuNhap <= 60tr -> thueCaNhan = thueThuNhap * (5 / 100); 
 *      Nếu 60tr < thueThuNhap <= 120tr -> thueCaNhan = 3e+6 + (thueThuNhap - 60e+6) * (10 / 100);
 *      Nếu 120 < thueThuNhap <= 210 -> thueCaNhan = 9e+6 + (thueThuNhap - 120e+6) * (15 / 100);
 *      Nếu 210 < thueThuNhap <= 384 => thueCaNhan = 22500000 + (thueThuNhap - 210e+6) * (20 / 100);
 *      Nếu 384 < thueThuNhap <= 624 => thueCaNhan = 57300000 + (thueThuNhap - 384e+6) * (25 / 100);
 *      Nếu 624 < thueThuNhap <= 960 => thueCaNhan = 117300000 + (thueThuNhap - 624e+6) * (30 / 100);
 *      Nếu 960 < thueThuNhap -> thueCaNhan = 218100000 + (thueThuNhap - 960e+6) * (35 / 100);
 *      Ngược lại -> cho người dùng nhập lại thuNhapNam
 * B4: hiển thị kết quả lên UI
 * 
 * Khối 3: thueCaNhan
 */
function tinhTCN() {
    var name = document.getElementById("inpName").value;
    var soNguoi = document.getElementById("inpSoNguoi").value;
    var thuNhapNam = document.getElementById("inpThuNhap").value;

    var thueThuNhap = 0;
    thueThuNhap = tinhTTN(thuNhapNam, soNguoi);

    var thueCaNhan = 0;

    if (0 < thueThuNhap && thueThuNhap <= 60e+6) {
        thueCaNhan = thueThuNhap * (5 / 100); 
    } else if(60e+6 < thueThuNhap && thueThuNhap <= 120e+6) {
        // 3e+6 = 60e+6 * 0.05
        thueCaNhan = 3e+6 + (thueThuNhap - 60e+6) * (10 / 100);
    } else if(120e+6 < thueThuNhap && thueThuNhap <= 210e+6) {
        // 9e+6 = 60e+6 * 0.05 + 60e+6 * 0.1
        thueCaNhan = 9e+6 + (thueThuNhap - 120e+6) * (15 / 100);
    } else if(210e+6 < thueThuNhap && thueThuNhap <= 384e+6) {
        // 22500000 = 60e+6 * 0.05 + 60e+6 * 0.1 + 90e+6 * 0.15
        thueCaNhan = 22500000 + (thueThuNhap - 210e+6) * (20 / 100);
    } else if(384e+6 < thueThuNhap && thueThuNhap <= 624e+6) {
        // 57300000 = 60e+6 * 0.05 + 60e+6 * 0.1 + 90e+6 * 0.15 + 174e+6 * 0.2
        thueCaNhan = 57300000 + (thueThuNhap - 384e+6) * (25 / 100);
    } else if(624e+6 < thueThuNhap && thueThuNhap <= 960e+6) {
        // 117300000 = 60e+6 * 0.05 + 60e+6 * 0.1 + 90e+6 * 0.15 + 174e+6 * 0.2 + 240e+6 * 0.25
        thueCaNhan = 117300000 + (thueThuNhap - 624e+6) * (30 / 100);
    } else if(960e+6 < thueThuNhap) {
        // 218100000 = 60e+6 * 0.05 + 60e+6 * 0.1 + 90e+6 * 0.15 + 174e+6 * 0.2 + 240e+6 * 0.25 + 336e+6 * 0.3
        thueCaNhan = 218100000 + (thueThuNhap - 960e+6) * (35 / 100);
    } else {
        alert("Số tiền thu nhập không hợp lệ.");
    }
    document.getElementById("ketQua").innerHTML = "Họ và tên: " + name + "; Tiền thuế thu nhập cá nhân: " + thueCaNhan.toLocaleString() + " VNĐ";
}
function tinhTTN(thuNhapNam, soNguoi) {
    return thuNhapNam - 4e+6 - soNguoi * 1600000;
}