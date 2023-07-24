const tableProducts = () => {
  return `
    <div class="container mt-3">
          <button id="addStudentBtn" class="btn btn-success my-3">Hiện thị sản phẩm</button>
          <table id="custom-table" class="table table-hover table-striped">
              <thead>
                  <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Price</th>
                      <th>Color</th>
                      <th>Thao tác</th>
                  </tr>
              </thead>
              <tbody id="dataStudents"></tbody>
          </table>
      </div>
    `;
};

export default tableProducts;
