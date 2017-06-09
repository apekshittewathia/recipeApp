import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);
Recipes=new Meteor.Collection('recipes');

RecipeSchema=new SimpleSchema({
	name:{
		type:String,
		label:"NAME"
	},
	desc:{type:String,
		label:"Description"},


	author:{type:String,
		label:"Author",
		autoValue:function(){
			return this.userId;
		}

	},
	createdAt:{
type:Date,
label:"Created At",
autoValue:function(){
	return new Date();
}
}
});
Recipes.attachSchema(RecipeSchema);
