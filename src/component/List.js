import React, { Component } from 'react';
import axios from 'axios';



import { toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';
class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
      id: '',
      title: '',
      content: '',
      author: '',
      date: '',
      image: '',
    }
    this.onDelete = this.onDelete.bind(this);
    this.onChange = this.onChange.bind(this);
    this.showEditProduct = this.showEditProduct.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }
  componentDidMount() {
    var { match } = this.props;
    if (match) {
      var id = match.params.id;
      axios({
        method: 'GET',
        url: `https://6257ea29e4e0b73142830b72.mockapi.io/News${id}`,
        data: null
      }).then(res => {
        var data = res.data;
        this.setState({
          id: data.id,
          title: data.title,
          content: data.content,
          image: data.image,
          date: data.date,
          author: data.author,
        });
      }).catch(err => {
      });
    }
    axios.get('https://6257ea29e4e0b73142830b72.mockapi.io/News').then(res => {
      this.setState({ news: res.data });
    })
    if (this.state.id == '') {
      document.getElementById('image-edit').style.display = 'none';
    } else {
      document.getElementById('image-edit').style.display = 'block';
    }
  }
  getProduct = (id) => {
    for (var i = 0; i < this.state.news.length; i++) {
      if (this.state.news[i].id === id) {
        return this.state.news[i];
      }
    }
    return null;
  }
  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  onChangeImage = (event) => {
    this.setState({
      [event.target.name]: "images/" + event.target.files[0].name,
    });
    console.log(event.target.files[0].name);
  }
  showEditProduct = (id) => {
    var newss = this.getProduct(id);
    this.setState({
      id: newss.id,
      title: newss.title,
      content: newss.content,
      author: newss.author,
      image: newss.image,
      date: newss.date,
    });
    document.getElementById('image-edit').style.display = 'block';
    alert(id);
  }
  getIndexProducts = (id) => {
    for (var i = 0; i < this.state.news.length; i++) {
      if (this.state.news[i].id === id) {
        return i;
      }
    }
    return -1;
  }
  onSave = (event) => {
    event.preventDefault();
    if (this.state.id == '') {
      if (this.state.title !== '' && this.state.content !== '' && this.state.author !== '' && this.state.date !== '' && this.state.image !== '') {
        axios({
          method: 'POST',
          url: `https://6257ea29e4e0b73142830b72.mockapi.io/News`,
          data: {
            title: this.state.title,
            content: this.state.content,
            author: this.state.author,
            image: this.state.image,
            date: this.state.date,
          }

        }).then(res => {
          this.componentDidMount();
          alert("Successfully");
        })
      } else {
        alert("Empty something");
      }
    } else {
      axios({
        method: 'PUT',
        url: `https://6257ea29e4e0b73142830b72.mockapi.io/News/${this.state.id}`,
        data: {
          title: this.state.title,
          content: this.state.content,
          author: this.state.author,
          image: this.state.image,
          date: this.state.date,
        }

      }).then(res => {
        this.componentDidMount();
        alert("Successfully");
      })
    }
    this.setState({
      id: '',
      title: '',
      content: '',
      author: '',
      date: '',
      image: '',
    });
  }
  onDelete = (id) => {
    console.log(id);
    axios({
      method: 'DELETE',
      url: `https://6257ea29e4e0b73142830b72.mockapi.io/News/${id}`,
      data: null
    }).then(res => {
      if (res.status === 200) {
        var index = this.getIndexProducts(id);
        if (index !== -1) {
          var news = this.state.news;
          news.splice(index, 1);
        }
        this.setState({
          news: news
        });
        alert(id);
        toast.success("Xóa sản phẩm thành công", {
        })

      }
    });
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-3">
            <form onSubmit={this.onSave}>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Title</label>
                <input
                  type="text"
                  name="title"
                  value={this.state.title}
                  onChange={this.onChange}
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter title"
                />
              </div>
              <div className="form-group">
                <label>Image</label>
                <input
                  type="file"
                  name="image"
                  onChange={this.onChangeImage}
                  className="form-control"
                  placeholder="image"
                />
              </div>
              <div className="form-group" id="image-edit" style={{ display: "none" }}>
                <label>Image</label>
                <img src={"./" + this.state.image} style={{ width: "100px" }} />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Content</label>
                <input
                  type="text"
                  name="content"
                  value={this.state.content}
                  onChange={this.onChange}
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter content"
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">author</label>
                <input
                  type="text"
                  name="author"
                  onChange={this.onChange}
                  value={this.state.author}
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="author"
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail2">Date</label>
                <input
                  type="date"
                  name="date"
                  onChange={this.onChange}
                  value={this.state.date}
                  className="form-control"
                  id="exampleInputEmail2"
                  aria-describedby="emailHelp"
                  placeholder="Enter day"
                />
              </div>

              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>

          </div>
          <div className='col-9'>
            <div className='row'>
              <table className='table-news'>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>TITLE</th>
                    <th>IMAGE</th>
                    <th>CONTENT</th>
                    <th className='date-news'>DATE</th>
                    <th className='date-news'>AUTHOR</th>
                    <th>ACTION</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    this.state.news.map((newss) => (
                      <tr>
                        <td>{newss.id}</td>
                        <td> <h5 className="card-title">{newss.title}</h5></td>
                        <td><img className="image-news" src={"./" + newss.image} alt="Card image cap" /></td>
                        <td><h8 className="card-title">{newss.content}</h8></td>
                        <td>{
                          newss.date
                        }</td>
                        <td>{
                          newss.author
                        }</td>
                        <td><button className="btn btn-light action-button" role="button" href="#" onClick={() => this.showEditProduct(newss.id)}>
                          Edit
                        </button>
                          <button className="btn btn-warning" onClick={() => this.onDelete(newss.id)}>
                            delete
                          </button>
                        </td>
                      </tr>
                    )
                    )}

                </tbody>
              </table>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default List;

