import React,{Component} from 'react';
import ProductService from '../Services/ProductService';

class ListProductComponent extends Component{
    constructor(props){
        super(props)
        this.state={
            products:[]
        }
        this.addProduct=this.addProduct.bind(this);
        this.editProduct=this.editProduct.bind(this);
        this.deleteProduct=this.deleteProduct.bind(this);
    }
    componentDidMount(){
        ProductService.getProducts().then((res)=>{
            this.setState({products:res.data});
        });
    }
    addProduct(){
        this.props.history.push('/add-product');
    }
    editProduct(id){
        this.props.history.push(`/update-product/${id}`)
    }
    deleteProduct(id){
        ProductService.deleteProduct(id).then(res=>{
           this.setState({products:this.state.products.filter(product=>product.id!==id)})
        })
    }
    render(){
        return(
            <div>
                <h2 className='text-center'>Products List</h2>
                <div className="row">
                   <button className="btn btn-primary" onClick={this.addProduct}>Add Product</button>
                </div>
                <div className='row'>
                    <table className='table table-striped table-bordered'>
                        <thead>
                            <tr>
                           
                            <th>Product name</th>
                            <th>Product category</th>
                            <th>Product cost</th>
                            <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                              this.state.products.map(
                                  product =>
                                  <tr key={product.id}>
                                     
                                      <td>{product.name}</td>
                                     <td>{product.category}</td>
                                       <td>{product.cost}</td>
                                       <td>
                                           <button onClick={()=>this.editProduct(product.id)} className="btn btn-info">Update</button>
                                           <button style={{marginLeft:"10px"}} onClick={()=>this.deleteProduct(product.id)} className="btn btn-danger">Delete</button>
                                       </td>
                                  </tr>
                              )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
export default ListProductComponent;