# Backend API – User, Category, Product

Project ini merupakan backend REST API sederhana menggunakan Node.js, Express, dan MySQL.

---

## A. Instalasi MySQL dan Tools

- XAMPP / MAMP / WAMP
- MySQL Server
- MySQL Workbench / phpMyAdmin

---

## B. Instalasi Project
### 1. Clone Repository
```bash
git clone <URL_REPOSITORY_GITHUB> 
```
### 2. Masuk ke Folder Project
```bash 
cd nama-project
```
### 3. Inisialisasi Project
```bash 
npm init -y
```
## C. Instalasi ExpressJS
```bash 
npm install express
```
## D. Pembuatan Database
1. Membuat Database
2. Tabel Users
3. Tabel Categories
4. Tabel Products
## E. Instalasi MySQL Driver
```bash 
npm install mysql
```
## F. Environment Variable (.env)
### 1. Instal dotenv
```bash 
npm install dotenv
```
### 2. Buat File .env
```bash 
PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=web
```
## G. Menjalankan Server
### 1. Instal Nodemon
```bash 
npm install -D nodemon
```
### 2. Edit Script package.json
"scripts": {
    "dev": "nodemon server.js"
    }
### 3. Jalankan Server
```bash 
npm run dev 
```

### I. Pengujian API Menggunakan Postman
Pastikan server sudah berjalan: http://localhost:3000

##  CATEGORY API

### Create Category (Tambah Data Category)
- Method: **POST**
- URL: http://localhost:3000/categories

- Pilih tab **Body**
- Pilih **raw**
- Pilih format **JSON**
- Masukkan data:
```json
{
  "name": "Sabun Cuci Piring"
} 
```
- Pilih Klik Send, Jika berhasil, akan muncul response data category yang ditambahkan.
![POST Category](Screenshot/post-category.png)

### Get All Categories (Lihat Semua Category)
- Method: **GET**
- URL: http://localhost:3000/categories

- Pilih Klik Send, Jika berhasil, Akan menampilkan seluruh data category dalam bentuk array JSON.
![POST Category](Screenshot/get-category.png)

### Update Category
- Method: **PUT**
- URL: http://localhost:3000/categories/2  (angka 2 merupakan id kategori yang akan diupdate)

- Pilih tab **Body**
- Pilih **raw**
- Pilih format **JSON**
- Pilih Klik Send, Jika berhasil, akan muncul pesan Kategori berhasil diupdate.
![POST Category](Screenshot/put-category.png)

### Delete Category
- Method: **DELETE**
- URL: http://localhost:3000/categories/2  (angka 2 merupakan id kategori yang akan dihapus)
- Pilih Klik Send, Jika berhasil, maka category akan terhapus dari database.
![POST Category](Screenshot/delete-category.png)

##  PRODUCT API

### Create Product (Tambah Data Product)
- Method: **POST**
- URL: http://localhost:3000/products

- Pilih tab **Body**
- Pilih **raw**
- Pilih format **JSON**
- Masukkan data:
```json
{
  "name": "Sunlight Jeruk Nipis 800ml",
  "price": 15000,
  "category_id": 1
}
```
- Pilih Klik Send, Jika berhasil, akan muncul response data product yang ditambahkan.
![POST Category](Screenshot/post-product.png)

### Get All Product (Lihat Semua Product)
- Method: **GET**
- URL: http://localhost:3000/products

- Pilih Klik Send, Jika berhasil, Akan menampilkan seluruh data product dalam bentuk array JSON.
![POST Category](Screenshot/get-product.png)

### Update Category
- Method: **PUT**
- URL: http://localhost:3000/products/2  (angka 2 merupakan id product yang akan diupdate)

- Pilih tab **Body**
- Pilih **raw**
- Pilih format **JSON**
- Pilih Klik Send, Jika berhasil, akan muncul pesan product berhasil diupdate.
![POST Category](Screenshot/put-product.png)

### Delete Category
- Method: **DELETE**
- URL: http://localhost:3000/products/2  (angka 2 merupakan id product yang akan dihapus)
- Pilih Klik Send, Jika berhasil, maka Product akan terhapus dari database.
![POST Category](Screenshot/delete-product.png)






