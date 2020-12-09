import React,{Component} from 'react';
import ProductService from '../Services/ProductService';
class UpdateComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id:this.props.match.params.id,
            productName:'',
            productCategory:'',
            productCost:''
          }
          this.changeProductNameHandler=this.changeProductNameHandler.bind(this);
          this.changeProductCategoryHandler=this.changeProductCategoryHandler.bind(this);
          this.changeProductCostHandler=this.changeProductCostHandler.bind(this);
          this.updateProduct=this.updateProduct.bind(this);
    }
    componentDidMount(){
        ProductService.getProductById(this.state.id).then((res)=>{
        let product=res.data;
        this.setState({productName:product.name,
            productCategory:product.category,
            productCost:product.cost
        });
         } );
    }
    updateProduct=(e)=>{
        e.preventDefault();
        let product={name:this.state.productName,category:this.state.productCategory,
        cost:this.state.productCost};
        console.log('product =>'+JSON.stringify(product));
        ProductService.updateProduct(product,this.state.id).then(res=>{
            this.props.history.push('/products');
        });
        
        
    }
    changeProductNameHandler=(event)=>{
   this.setState({productName:event.target.value});
    }
    changeProductCategoryHandler=(event)=>{
        this.setState({productCategory:event.target.value});
         }
         changeProductCostHandler=(event)=>{
            this.setState({productCost:event.target.value});
             }
             cancel(){
                this.props.history.push('/products');
             }
    render() { 
        return ( 
            <div>
                <div className='container'>
                    <div className='row'>
                        <div className='card col-md-6 offset-md-3 offset-md-3'>
                            <h3 className='text-center'>Update Product</h3>
                            <div className='card-body'>
                                <form>
                                    <div className='form-group'>
                                        <label>Product Name:</label>
                                        <input placeholder="Product Name" name="productName" className="form-control"
                                        value={this.state.productName} onChange={this.changeProductNameHandler}/>
                                    </div>
                                    <div className='form-group'>
                                        <label>Product Category:</label>
                                        <input placeholder="Product Category" name="productCategory" className="form-control"
                                        value={this.state.productCategory} onChange={this.changeProductCategoryHandler}/>
                                    </div>
                                    <div className='form-group'>
                                        <label>Product Cost:</label>
                                        <input placeholder="Product Cost" name="productCost" className="form-control"
                                        value={this.state.productCost} onChange={this.changeProductCostHandler}/>
                                    </div>
                                    <button className='btn btn-success' onClick={this.updateProduct}>Save</button>
                                    <button className='btn btn-danger' onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default UpdateComponent;