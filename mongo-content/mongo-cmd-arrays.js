db.imdb.find({ genres: "Short" })

db.imdb.find({ "genres.0": "Short" }, { genres: 1, title: 1 }).limit(10)

db.imdb.find({ "genres.1": "Short" }, { genres: 1, title: 1 }).limit(10)

db.imdb.find({ "genres.2": "Drama" }, { genres: 1, title: 1 }).limit(10)

db.imdb.find({ "genres": ["Short", "Drama"] }, { genres: 1, title: 1 }).limit(10)

db.imdb.find({ "genres": { $all: ["Short", "Drama"] } }, { genres: 1, title: 1 }).limit(10)

db.imdb.find({ "genres": { $size: 2 } }, { genres: 1, title: 1 }).limit(10)

db.imdb.updateOne({ _id: ObjectId('573a1391f29313caabcd6d40') }, { $push: { genres: "Test" } })

db.imdb.updateOne(
    { _id: ObjectId('573a1391f29313caabcd6d40') },
    { $push: { genres: { $each: ["Drama", "Scifi", "Action"], $slice: -3 } } }
)

db.imdb.updateOne({ _id: ObjectId('573a1391f29313caabcd6d40') }, { $set: { genres: ["Test", "Deneme", "komedi"] } })

db.imdb.updateOne({ _id: ObjectId('573a1391f29313caabcd6d40') }, { $set: { genres: "Test" } })

db.imdb.updateOne({ _id: ObjectId('573a1391f29313caabcd6d40') }, { $pop: { genres: 1 } })

db.imdb.updateOne({ _id: ObjectId('573a1391f29313caabcd6d40') }, { $pop: { genres: -1 } })

db.imdb.updateOne({ _id: ObjectId('573a1391f29313caabcd6d40') }, { $set: { "genres.0": "First" } })

db.imdb.updateOne(
    { _id: ObjectId('573a1391f29313caabcd6d40') },
    { $push: { genres: { $each: ["Drama", "Scifi", "Action"], $slice: 2 } } }
)

db.imdb.updateOne({ _id: ObjectId('573a1391f29313caabcd6d40') }, { $addToSet: { genres: "Test" } })

db.imdb.updateOne({ _id: ObjectId('573a1391f29313caabcd6d40') }, { $pull: { genres: "Scifi" } })

db.imdb.updateOne({ _id: ObjectId('573a1391f29313caabcd6d40') }, { $push: { genres: "Test" } })

db.imdb.updateOne(
    { _id: ObjectId('573a1391f29313caabcd6d40') },
    {
        $push: {
            genres: {
                $each: ["Drama", "Scifi", "Action"],
                $sort: 1,
                $slice: 3
            }
        }
    }
)

db.imdb.find(
    {
        $text : {
            $search : "anvil"
        }
    }
)

db.imdb.find(
    {
        $text : {
            $search : "scene"
        }
    }
)

db.imdb.find(
    {
        "imdb.votes" : {$gte:2000},
        "tomatoes.viewer.rating" : 3.6
    }
)


