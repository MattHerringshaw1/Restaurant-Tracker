# sequelize model:generate --name Book --attributes name:string,author:string,year:integer,genre:string

# sequelize migration:create --name 'adding foreign key'

# run in terminal: bash init.bash
# models genereated
# define associations for all models
# define foreign key in migrations

# created init.bash file
# sequelize model:generate --name Book --attributes name:string,author:string,year:integer,genre:string
# sequelize model:generate --name Comment --attributes body:text,book_id:integer
# sequelize model:generate --name users --attributes username:string,password:string


# sequelize model:generate --name User --attributes username:string,password:string
# sequelize model:generate --name Restaurant --attributes restaurant_name:string,restaurant_address_1:string,restaurant_address_2:string,restaurant_rating:integer,user_id:integer
# sequelize model:generate --name Review --attributes body:text,restaurant_id:integer

# User
#username: string
#password: string 


# Restaurant 
#restaurant_name: string
#restaurant_address_1: string
#restaurant_address_2: string
#restaurant_rating: integer
#user_id: foreign key



# Review
#body: text
#restaurant_id: foreign key