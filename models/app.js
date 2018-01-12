const db = require('./db.js');
const Audio = require('./Audio.js');
const Album = require('./Album.js');

let a1 = {
	album_id:1,  
	album_name:"坑王驾到",
	album_desc:"《坑王驾到》是由郭德纲联手爱奇艺出品的中国首档大型单口相声体验式综艺节目。", 
	album_num:56 
};
let a2 = {
	album_id:2,  
	album_name:"郭德纲于谦精品",
	album_desc:"郭德纲于谦经典对口相声，包含《我字》《你字》系列等精品相声作品。", 
	album_num:56 
};
let a3 = {
	album_id:3,  
	album_name:"郭德纲精品单口",
	album_desc:"郭德纲经典单口相声，包含民国奇案、鬼怪斗法等。", 
	album_num:56 
};
let a4 = {
	album_id:4,  
	album_name:"今古奇观",
	album_desc:"《今古奇观》是以中国传统名著《三言二拍》故事为原型进行演绎，全部由郭德纲亲自表演的大型系列剧。杜十娘怒沉百宝箱、金玉奴棒打薄情郎……这些老百姓耳熟能详的经典故事如今被重新表述，郭德纲再次掀起民间故事高峰。", 
	album_num:56 
};
let a5 = {
	album_id:5,  
	album_name:"德云社精品",
	album_desc:"德云社21载披荆斩棘砥砺前行，培养了大批优秀的青年相声表演艺术家，如郭麒麟、岳云鹏、张云雷等等。", 
	album_num:56 
};
let a6 = {
	album_id:6,  
	album_name:"岳云鹏孙越德云社精品",
	album_desc:"岳云鹏在小剧场打拼树载，基础扎实尤善学唱，树立了自己别具风味的表演风格，和孙越搭档，火爆全国。", 
	album_num:56 
};
/*Album.create(a6,function(err){
	if(err){
		console.log(err);
	}
	console.log('插入成功');
	db.close();
});*/
let a11 = {
	aid:10001,  
	title:"丑娘娘1",  
	artist:"郭德纲", 
	episode:12,   
	album_name:'郭德纲精品单口',  
	album_id: 3,
	play_path:'https://www.kunwu.com/api/audio/10001',  
	duration:678, 
	img_path:'https://www.kunwu.com/img/345.jpg'   
}
Audio.create(a11,function(err){
	if(err){
		console.log(err);
	}
	console.log('插入成功');
	db.close();
});



