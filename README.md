UDT NODEJS TEST <br>
Câu hỏi 1: <br>
Flowchart: <br>
 ![image](https://github.com/user-attachments/assets/598642a4-5e2e-4a44-be9f-8f457e4f9f86) <br>

Triển khai:
-	Đầu tiên là tạo một hàm sort để sắp xếp listings theo chi phí trên mỗi container (bằng cách lấy totalCost / container) từ thấp đến cao, để ưu tiên thuê từ các nhà cung cấp có chi phí thấp nhất trên mỗi container.
 ![image](https://github.com/user-attachments/assets/8fb9614c-8af8-4ded-9f19-dae41595c2a7)

-	Khởi tạo biến totalCost để tính tổng chi phí và totalContainers để đếm số container đã thuê.
-	Duyệt qua danh sách nhà cung cấp sau khi đã sắp xếp:
+ Nếu nhà cung cấp có đủ số lượng container để đáp ứng phần còn lại của neededContainer, thì thuê số lượng container cần thiết từ nhà cung cấp đó, cộng chi phí và kết thúc.
+ Nếu nhà cung cấp không có đủ số lượng container cần thiết, thì thuê toàn bộ số lượng container của nhà cung cấp đó, cộng chi phí, và chuyển sang nhà cung cấp tiếp theo.
-	Nếu duyệt hết danh sách mà totalContainers vẫn nhỏ hơn neededContainer, hiển thị thông báo “Không đủ container”.
-	In ra chi tiết các hợp đồng và tổng chi phí.
 ![image](https://github.com/user-attachments/assets/d273dedc-364f-4ef2-af3d-dd249488fe61)
 ![image](https://github.com/user-attachments/assets/c2ef80b2-af19-4ecc-88a1-f8b8f0d54bd8)
 
Kết quả khi chạy hàm rentContainers:
 ![image](https://github.com/user-attachments/assets/5e87ef66-1117-4817-8664-04476304bc06)
 ![image](https://github.com/user-attachments/assets/441aaa95-e126-4d66-838c-1eeca0a82c42)
 ![image](https://github.com/user-attachments/assets/5fb0b77a-40a6-49a7-bfd8-c1d2d31a19ef)
 ![image](https://github.com/user-attachments/assets/31788093-3bf7-4159-bfe1-8bd19eb73655) 
 ![image](https://github.com/user-attachments/assets/5a3e304e-8ecb-4003-af11-03f2ecdd827a)
 ![image](https://github.com/user-attachments/assets/37d57ced-e856-43ba-ab32-a21e26a9e1e4)

Câu hỏi 2: <br>
ERD: <br>
 ![image](https://github.com/user-attachments/assets/ac8a3980-827a-423a-acab-499e6595bf88)

Giải thích các mối quan hệ:
-	Customer – Cart: owns
+ Giải thích: Quan hệ này thể hiện rằng một Customer có thể sở hữu nhiều Cart.
+ Lý do: Mỗi khách hàng có thể có nhiều giỏ hàng khác nhau cho các lần mua hàng khác nhau. Customer và Cart có quan hệ 1-nhiều.
-	Customer – Transaction: initiates
+ Giải thích: Một Customer có thể tạo ra nhiều Transaction.
+ Lý do: Một khách hàng có thể thực hiện nhiều giao dịch khác nhau qua thời gian, mỗi giao dịch đại diện cho một lần mua hàng hoàn tất. Customer và Transaction có quan hệ 1-nhiều.
-	Customer – Billing: linked_to
+ Giải thích: Mỗi Customer có thể liên kết với nhiều Billing.
+ Lý do: Mỗi giao dịch hoàn tất của khách hàng sẽ tạo ra một hóa đơn (Billing). Quan hệ này giúp liên kết thông tin thanh toán với từng khách hàng. Customer và Billing có quan hệ 1-nhiều.
-	Agency – Product: sells
+ Giải thích: Mỗi Agency có thể bán nhiều Product.
+ Lý do: Mỗi đại lý có thể cung cấp nhiều loại sản phẩm khác nhau. Agency và Product có quan hệ 1-nhiều.
-	Agency – Product: involved_in
+ Giải thích: Mỗi Agency có thể liên kết với nhiều Transaction.
+ Lý do: Một đại lý có thể tham gia vào nhiều giao dịch khác nhau khi khách hàng mua các sản phẩm mà đại lý cung cấp. Agency và Transaction có quan hệ 1-nhiều.
-	Agency – Product: licked_to
+ Giải thích: Mỗi Agency có thể liên kết với nhiều Billing.
+ Lý do: Mỗi lần bán hàng (transaction) được đại lý thực hiện sẽ sinh ra hóa đơn tương ứng. Quan hệ này giúp quản lý hóa đơn của mỗi đại lý. Agency và Billing có quan hệ 1-nhiều.
-	Admin – Agency: manages
+ Giải thích: Một Admin có thể quản lý nhiều Agency.
+ Lý do: Người quản trị có quyền xem, tạo, cập nhật, và xóa các đại lý. Quan hệ 1-nhiều này phản ánh vai trò quản lý của Admin đối với các đại lý.
-	Cart – Cart_Product: contains
+ Giải thích: Mỗi Cart có thể chứa nhiều Product thông qua bảng Cart_Product.
+ Lý do: Một giỏ hàng có thể chứa nhiều sản phẩm, và một sản phẩm có thể được thêm vào nhiều giỏ hàng. Bảng trung gian Cart_Product lưu trữ mối quan hệ nhiều-nhiều giữa Cart và Product.
-	Product – Cart_Product: added_to
+ Giải thích: Mỗi Product có thể xuất hiện trong nhiều Cart thông qua Cart_Product.
+ Lý do: Các sản phẩm có thể được thêm vào nhiều giỏ hàng khác nhau của các khách hàng khác nhau. Product và Cart có quan hệ nhiều-nhiều qua Cart_Product.
-	Transaction – Billing: generates
+ Giải thích: Mỗi Transaction sẽ tạo ra một Billing.
+ Lý do: Mỗi giao dịch khi hoàn tất sẽ sinh ra một hóa đơn tương ứng. Quan hệ 1-1 đảm bảo rằng mỗi giao dịch chỉ có một hóa đơn và ngược lại, giúp dễ dàng theo dõi hóa đơn theo từng giao dịch.
Câu hỏi 3:
1.	
-	Dựa trên ERD đã thiết kế ở câu trên, em sẽ sử dụng cơ sở dữ liệu MongoDB để triển khai.
2.	
-	Lý do sử dụng:
Ưu điểm
+ Dễ sử dụng và linh hoạt
+ Khả năng mở rộng cao
+ Thực thi nhanh
+ Dễ dàng kết hợp với LoopBack 4
Khuyết điểm:
+ Không mạnh như các cơ sở dữ liệu quan hệ khi làm việc với các quan hệ phức tạp
+ Không hỗ trợ tính toàn vẹn dữ liệu ACID mạnh mẽ như các cơ sở dữ liệu quan hệ.
3.	<br>
-	Tệp docker-compose.yml <br>
![image](https://github.com/user-attachments/assets/9b2f7558-8a69-4008-97fc-594c1c99c427) <br>
4.
- đã setup
