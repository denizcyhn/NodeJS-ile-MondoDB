const app = require('./app');
const userSchema = require('./schema/userschema')
const { default: mongoose } = require('mongoose')

const connectToMongoDB = async () => {
    await app().then(async(mongoose) => {
        try {
            console.log('MongoDB bağlı.')

             //create         
             
             const user={
             name:'Ali',
             username: 'Kaya'
}
  
            await new userSchema(user).save()

            //find

            const result = await userSchema.find({

            })
           
            //update 
    
        await userSchema.update(
            {
                name:'Ali',
            },
            {
                name:'Ahmet',
            })
            
            //delete

            await userSchema.deleteOne({
            name:'',
            })

        } finally {
            mongoose.connection.close()
        }
    })
}
connectToMongoDB()