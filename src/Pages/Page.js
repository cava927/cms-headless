import React, {Component} from 'react';
import *  as actions from '../store/actions';
import Loader from "../components/Loader";
import PageGrid from "../components/PageGrid";
import { connect } from 'react-redux';


class Homepage extends Component{
    constructor() {
      super();
         this.state = {
            isLoading:false,
            page:null,
         }
      }

    componentDidMount() {
      this.props.setPageSettings(this.props.paramPage)
    }

    componentDidUpdate = prevProps=>{
      if(prevProps.isLoading !== this.props.isLoading){
        this.setState({page: this.props.layout});
      }
    }

    render() {
      let {isLoading} = this.props; 
      return (
      <div className="app-container" style={this.props.layoutGrid}>
        {!isLoading ? <PageGrid  layout = {this.props.layout} bodyContents = {this.props.bodyContents} headerContents = {this.props.headerContents} footerContents = {this.props.footerContents} /> : <Loader/> }
      </div>
      )
    }
}

const mapStateToProps = state => {
	return {
    user: state.userSettings.user,
    layout:state.page.layout,
    bodyContents: state.page.bodyContents,
    isLoading:state.page.isLoading,
    layoutGrid:state.page.layoutGrid,
    headerContents: state.page.headerContents,
    footerContents: state.page.footerContents,
	}
};

const mapDispatchToProps = dispatch => {
  return {
    setPageSettings: (paramPage) => dispatch(actions.setPageSettings(paramPage)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);