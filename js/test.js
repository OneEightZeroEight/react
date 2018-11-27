// 只要props和state变化，该生命周期必定触发
shouldComponentUpdate(){
    if(this.state.inputValue.length>5){
        return true
    }else{
        return false
    }
}