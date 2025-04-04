# A Demo About Blind SQL Injection
## Mô tả
Đây là bài thuyết trình môn ATBMHTTT - PTIT, mô phỏng về Blind SQL Injection trên một website bán hàng. Thư mục gồm 2 phần: Backend sử dụng Python + SQL Server và Frontend sử dụng React.

## Yêu cầu
Cần cài đặt Nodejs, Python, Sql Server trước khi tiến hành cài đặt code.

## Cách cài đặt

### 1. Cài đặt môi trường
Tạo tệp ```.env```
Trong thư mục **backend**, tạo một tệp tên ```.env```
Cấu hình các biến môi trường vào ```.env``` (Mẫu nằm ở file [.env_example](https://github.com/haiphong-0132/BlindSQLInjectionProject-/blob/main/backend/.env_example)

Cụ thể:

```bash
DB_DRIVER = ODBC Driver 18 for SQL Server
DB_SERVER = <HOST_IP_ADDRESS>,<TELNET_PORT_SETUP_FOR_CONNECT_SQLSERVER>
DB_NAME=<DATABASE_NAME>
DB_UID=<DATABASE_USER>
DB_PWD=<DATABASE_PASSPORT>
TRUST_SERVER_CERTIFICATE=yes
```
**Lưu ý:** Cần tạo tài khoản người dùng và cấp quyền (grant access) đọc cho người dùng trong SQL Server

### 2. Cài đặt database

Tạo DATABASE có tên giống như DB_NAME mà bạn đã cấu hình trong file ```.env```.
Ví dụ:
```sql
CREATE DATABASE ATBM -- ATBM là tên database muốn tạo
```

Tiến hành tạo các bảng và điền các giá trị cần thiết bằng đoạn mã SQL trong thư mục [sql_queries](https://github.com/haiphong-0132/BlindSQLInjectionProject-/tree/main/sql_queries)

### 3. Chạy Backend

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

### 4. Chạy Frontend
Tạo một **TERMINAL MỚI**!!!
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
