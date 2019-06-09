/**
 * 
 * @authors wanglifeng 
 * @date    2019-05-07 17:01:36
 * @version $1$
 */
import bar from './bar'
import Vue from 'vue'

var app=new Vue({
	el:'#app',
	data:{
		newTodo:'',
		todoList:[]
	},
	created:function(){
		window.onbeforeunload=()=>{
			let dataString=JSON.stringify(this.todoList);
			window.localStorage.setItem('myTodos',dataString);
		}
		let oldDataString=window.localStorage.getItem('myTodos');
		let oldData=JSON.parse(oldDataString);
		this.todoList=oldData||[];
		Date.prototype.format =function(fmt){
			var o={
				"M+":this.getMonth()+1,//月份
				"d+":this.getDate(),//日期
				"h+":this.getHours(),//小时
				"m+":this.getMinutes(),//分
				"q+":Math.floor((this.getMonth()+3)/3),//季度
				"s":this.getMilliseconds()//毫秒
			};
			if(/(y+)/.test(fmt)){
				fmt=fmt.replace(RegExp.$1,(this.getFullYear()+"").substr(4- RegExp.$1.length));
			} 
			for(var k in o){
				if(new RegExp("("+ k +")").test(fmt)){
					fmt = fmt.replace(RegExp.$1,RegExp.$1.length==1? o[k] :("00"+ o[k]).substr((""+ o[k]).length));
				}
			}
		    return fmt;
		}
	},
	methods:{
		addTodo:function(){
			
			this.todoList.push({
				title:this.newTodo,
				time:new Date().format("yyyy-MM-dd hh:mm"),
				done:false//添加一个done属性
			})
			this.newTodo=""//设置为空
		},
		removeTodo:function(todo){
			let index=this.todoList.indexOf(todo);
			this.todoList.splice(index,1);
		}
	}
})
  

