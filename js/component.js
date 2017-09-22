Vue.component('comment-list',{
	template:`
	<div class='tie-area'>
		<div id="comment-area">
			<textarea v-model='newContent'></textarea>
			<div class='send'>
				<div><input type="text" placeholder='账号' v-model='newName'></div>
				<div><input type="password" placeholder='密码' v-model='newPassword'></div>
				<div class='links-area'>
					<a href="">注册</a>
					<a href="">跟帖广场</a>
					<a href="">手机发跟帖</a>
				</div>
				<div class='tie-submit' @click='pushList'>登录并发帖</div>
			</div>
		</div>
		<p class='warning'>网友评论仅供其表达个人看法，并不表明网易立场。</p>
		<ul id='tie-list'>
			<li v-for='comment in comments'>
				<div class="photo" v-bind:style="{backgroundImage:getUrl(comment)}"></div>
				<div class="tie-content">
					<div class="tie-author">
						<div class="tie-name">{{comment.usrname}}</div>
						<div class="tie-place">{{comment.place}}网友</div>
						<div class="tie-time">{{comment.time}}</div>
					</div>
					<p class="tie-arti">{{comment.message}}</p>
					<div class="toolbar">
						<a href="">回复</a><a href="">分享</a>
					</div>
				</div>
			</li>
		</ul>
	</div>
	`,
	data(){
		return{
			comments:[
				{usrname:'好想吃翔',place:'北京',src:'../images/one.jpg',time:'2014-05-16 22:26:50',message:'从没上过这网站，看那sb广告就特么一装逼的主'},
				{usrname:'瘪谷一女士',place:'上海',src:'../images/two.jpg',time:'2014-05-16 20:23:56',message:'黄海波第一未婚，第二没破坏别人家庭，第三没玩弄女人感情，第四花的是自己的钱，第五不拖欠一分一毛，第六不碰女粉丝，这他妈的嫖个娼碍着谁了？我想问强奸幼女的校长怎么处理的？包养情妇的贪官咋办？还有越南的华人怎么解救？'},
				{usrname:'我自己都不知道自己是谁',src:'../images/three.jpg',place:'深圳',time:'2014-06-16 29:25:23',message:'聚美啥时能不卖假货我啥时再挺它'},
				{usrname:'超级可爱',place:'天津',src:'../images/four.jpg',time:'2014-07-16 22:26:50',message:'宜信太牛了。可以和诺亚财富PK了'},
				{usrname:'嘿siri',place:'南昌',src:'../images/five.jpg',time:'2014-08-17 20:23:56',message:'雾草上市了。。。'},
				{usrname:'嘿嘿嘿',src:'../images/six.jpg',place:'九江',time:'2014-08-19 29:25:23',message:'聚美。。。自己体会下。。'},
			],
			newName:'',
			newPassword:'',
			newContent:'',
		}
	},
	methods:{
		getUrl(comment){
			if(comment.src){
				return 'url('+comment.src+')';
			}else{
				return 'url(../images/noface.png)';
			}
		},
		getTime(){
			var date = new Date();
		    var seperator1 = "-";
		    var seperator2 = ":";
		    var month = date.getMonth() + 1;
		    var strDate = date.getDate();
		    if (month >= 1 && month <= 9) {
		        month = "0" + month;
		    }
		    if (strDate >= 0 && strDate <= 9) {
		        strDate = "0" + strDate;
		    }
		    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
		            + " " + date.getHours() + seperator2 + date.getMinutes()
		            + seperator2 + date.getSeconds();
		    return currentdate;
		}
		,
		pushList(){
			if(this.newName==''||this.newPassword==''){
				window.confirm('用户名或密码不能为空!')
			}
			else if(this.newContent==''){
				window.confirm('请输入帖子内容!');
			}
			else if(this.newName=='volcano'&&this.newPassword=='123456'){
				var user={usrname:this.newName,place:'北京',time:this.getTime(),message:this.newContent};
				this.comments.unshift(user);
			}else{
				window.confirm('用户名或密码错误!');
			}
			this.newName='';
			this.newPassword=''
			this.newContent='';
		}
	}
})
var vm=new Vue({
	el:'#container',
	data:{
		newName:'',
		newContent:'',
	}
})