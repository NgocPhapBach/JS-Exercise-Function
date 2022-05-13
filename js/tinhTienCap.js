/**
 * Khối 1: name, maKH, soKenh, connect
 * 
 * Khối 2: 
 * B1: tạo hàm các giá trị hằng số: HoaDonND, DichVuND, CaoCapND, HoaDonDN, DichVuDN, CaoCapDN
 * B2: tạo hàm kiểm tra xem người dùng chọn loại khách hàng nào
 *      Nếu KH là nhà dân -> display ô nhập kết nối = none;
 *      Nếu KH là doanh nghiệp -> display ô nhập kết nối = block;
 *      Nếu người dùng chưa chọn loại KH -> thông báo người dùng phải chọn loại KH
 * B3: tạo hàm tính tiền cáp nhà dân
 *      Nếu 0 <= số kênh < 1 -> return HoaDonND + DichVuND;
 *      Nếu 1 <= số kênh -> return HoaDonND + DichVuND + soKenh * CaoCapND;
 *      Ngược lại -> thông báo người dùng nhập số kênh không đúng
 * B3: tạo hàm tính tền cáp doanh nghiệp
 *      Nếu 0 <= kế nối <= 10 và 0 <= số kênh < 1 -> return HoaDonDN + DichVuDN;
 *      Nếu 0 <= kế nối <= 10 và 1 <= số kênh -> return HoaDonDN + DichVuDN + soKenh * CaoCapDN;
 *      Nếu 10 < kết nối và 0 <= số kênh < 1 -> return (connect - 10) * 5 + HoaDonDN + DichVuDN;
 *      Nếu 10 < kết nối và 1 <= số kênh -> return (connect - 10) * 5 + HoaDonDN + DichVuDN + soKenh * CaoCapDN;
 *      Ngược lại -> thông báo người dùng nhập lại kết nối hoặc kênh.
 * B4: tạo hàm tính tiền cáp
 *      Lấy các giá trị từ form
 *      Nếu user = Nhà dân -> thanhTien = hàm tính tiền cáp nhà dân với tham số soKenh
 *      Nếu user = Doanh nghiêp -> thanhTien = hàm tính tiền cáp doanh nghiệp với tham số connect và soKenh
 * B5: hiển thị kết quả lên UI
 * 
 * Khối 3: maKH, thanhTienND or thanhTienDN
 */
const HoaDonND = 4.5;
const DichVuND = 20.5;
const CaoCapND = 7.5;

const HoaDonDN = 15;
const DichVuDN = 75;
const CaoCapDN = 50;

function tienCap() {
    var user = document.getElementById("slcUser").value;
    var maKH = document.getElementById("inpMKH").value;
    var soKenh = document.getElementById("inpSoKenh").value;
    var connect = document.getElementById("inpConnect").value;

    var hienThi = document.getElementById("ketQua1");

    var thanhTienND = 0;
    var thanhTienDN = 0;

    switch (user) {
        case "nhaDan":
            thanhTienND = tienCapND(soKenh);
            hienThi.innerHTML = "Mã khách hàng: " + maKH + "; Tiền cáp: " + thanhTienND.toLocaleString() + "$";
            break;
        case "doanhNghiep":
            thanhTienDN = tienCapDN(connect, soKenh);
            hienThi.innerHTML = "Mã khách hàng: " + maKH + "; Tiền cáp: " + thanhTienDN.toLocaleString() + "$";
            break;
        default:
            alert("Hãy chọn loại khách hàng!");
            break;
    }
}
function checkUser() {
    var myConnect = document.getElementById("myConnect");
    var user = document.getElementById("slcUser").value;

    switch (user) {
        case "nhaDan":
            myConnect.style.display = "none";
            break;
        case "doanhNghiep":
            myConnect.style.display = "block";
            break;
        default:
            myConnect.style.display = "none";
            break;
    }
}
function tienCapND(soKenh) {
    if(0 <= soKenh && soKenh < 1){
        return HoaDonND + DichVuND;
    } else if (1 <= soKenh){
        return HoaDonND + DichVuND + soKenh * CaoCapND;
    } else {
        alert("Số kênh không đúng. Hãy nhập lại!")
    }
}
function tienCapDN(connect, soKenh) {
    if(0 <= connect && connect <= 10){
        if(0 <= soKenh && soKenh < 1){
            return HoaDonDN + DichVuDN;
        } else if(1 <= soKenh){
            return HoaDonDN + DichVuDN + soKenh * CaoCapDN;
        } else {
            alert("Số kết nối hoặc số kênh không đúng. Vui lòng kiểm tra lại!")
        }
    } else if(10 < connect) {
        if(0 <= soKenh && soKenh < 1){
            return (connect - 10) * 5 + HoaDonDN + DichVuDN;
        } else if(1 <= soKenh){
            return (connect - 10) * 5 + HoaDonDN + DichVuDN + soKenh * CaoCapDN;
        } else {
            alert("Số kết nối hoặc số kênh không đúng. Vui lòng kiểm tra lại!")
        }
    } else {
        alert("Số kết nối hoặc số kênh không đúng. Vui lòng kiểm tra lại!")
    }
}