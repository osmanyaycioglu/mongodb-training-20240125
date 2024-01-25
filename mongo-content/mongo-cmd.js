db.customer.insertOne({
    "name": "ali",
    "surname": "yaycıoğlu",
    "height": 200,
    "weight": 90
}
)


db.customer.insertMany(
    [
        {
            "name": "ali",
            "surname": "veli",
            "height": 180,
            "weight": 99
        },
        {
            "name": "ayşe",
            "surname": "alaz",
            "height": 170,
            "weight": 55
        }

    ]
)
db.customer.find()
db.customer.deleteOne({_id: ObjectId('65b23fcbae86e661be487c41')})
