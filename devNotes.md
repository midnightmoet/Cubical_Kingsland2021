Difference between devDependencies and Dependencies

The difference between these two, is that devDependencies are modules which are only required during development, while dependencies are modules which are also required at runtime.
To save a dependency as a devDependency on installation we need to do an npm install --save-dev, instead of just an npm install --save.

https://medium.com/@dylanavery720/npmmmm-1-dev-dependencies-dependencies-8931c2583b0c#:~:text=The%20difference%20between%20these%20two,an%20npm%20install%20%2D%2Dsave

<!-- Star code -->
Cube.findById(req.params.id, function (err, cube) {
        if (err) return console.error(err);
    })
        .lean()
        .populate("accessories")
        .exec()
        .then((data) => {
            console.log(
                "Cube detailPage data:",
                data,
                "This cube Id:",
                req.params.id
            );
            res.render("updatedDetailsPage", { cube: data, token: validToken });
        })
        .catch((err) => console.log(err));
