# A Demo About Blind SQL Injection
## Mô tả
Đây là bài thuyết trình môn ATBMHTTT - PTIT, mô phỏng về Blind SQL Injection trên một website bán hàng. Thư mục gồm 2 phần: Backend sử dụng Python + SQL Server và Frontend sử dụng React.

## Cách cài đặt

### 1. Cài đặt môi trường
Tạo tệp ```.env```
Trong thư mục **backend**, tạo một tệp tên ```.env```
Cấu hình các biến môi trường vào ```.env``` (Mẫu nằm ở file [.env_example](https://github.com/haiphong-0132/BlindSQLInjectionProject-/blob/main/backend/.env_example)

### 2. Chạy Backend

Chuyển đến thư mục **backend**:

```bash
cd backend
```
Tạo Python environment trong thư mục **backend**:

```bash
python -m venv venv
```
Kích hoạt môi trường ảo

Trên Windows:
```bash
.\venv\Scripts\activate
```
Trên macOS/Linux:
```bash
source venv/bin/activate
```
Cài đặt thư viện cần thiết từ file ```requirements.txt```:

```bash
pip install -r requirements.txt
```

Chạy file ```app.py``` để chạy backend:
```bash
python app.py
```

### 3. Chạy Frontend
Tạo một TERMINAL MỚI!!!
Chuyển đến thư mục **frontend**:
```bash
cd frontend
```
Cài đặt các gói yêu cầu của React:
```bash
npm instal
```
Chạy React
```bash
npm start
```
Web bán hàng được mở tại địa chỉ ```http://localhost:3000```.
