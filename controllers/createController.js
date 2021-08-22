module.exports = {
    create:(req, res)=> {
        res.render('create', { title: 'Create Cube' });
    },
    post: async (req, res)  => {
        const cube = {
            name: req.body.name,
            description: req.body.description,
            imageUrl: req.body.imageUrl,
            difficultyLevel: req.body.difficultyLevel 
        };
        try{
            await req.storage.create(cube);
        }catch(err){
            if(err.name == 'ValidationError'){
                return res.render('create', {title:'Create Cube', error:'All fields are required. Image Url must be a valid Url'});
            }
        }

        res.redirect('/');
    }
};