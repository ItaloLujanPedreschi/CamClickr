# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

demo = User.create({ fname: "Demo", lname: "Demonstration", age: 18, email: "demo@mail.com", password: "password" })
sample = User.create({ fname: "Sample", lname: "Sampleton", age: 18, email: "sample@mail.com", password: "password" })

Photo.destroy_all

photo1 = Photo.create({ user_id: demo.id, title: "Elephant in the room", description: "Elephant highlighted by break in the canopy, this is the closest I've ever been to one!" })
photo2 = Photo.create({ user_id: sample.id, title: "Long exposure stream", description: "Long exposure shot of a soft stream, amazing how fast snowy mountains can transition into tree filled greenery" })
photo3 = Photo.create({ user_id: demo.id, title: "Clear Valley", description: "Yosemite Valley on a calm summer day" })
photo4 = Photo.create({ user_id: demo.id, title: "Light and lightning", description: "Cool light bar picture perfectly timed with lightning in background" })
photo5 = Photo.create({ user_id: demo.id, title: "Ghosts", description: "Incredible line up of Koenigseggs during the annual meetup of the Ghost Squadron" })
photo6 = Photo.create({ user_id: demo.id, title: "Big air", description: "Amazing air caught by this rally car over a hill" })
photo7 = Photo.create({ user_id: demo.id, title: "Old faithful eruption", description: "Old faithful in the light of the beautiful Yellowstone sunset" })
photo8 = Photo.create({ user_id: demo.id, title: "Taking flight", description: "Low clearance at a very high speed over a mountain side, adrenaline must be pumping!" })
photo9 = Photo.create({ user_id: demo.id, title: "Knee drags", description: "The greater the lean, the faster the turn, expalins why the leader is knee dragging!" })
photo10 = Photo.create({ user_id: demo.id, title: "Tetons from Jenny Lake", description: "View of the Tetons from over the glistening Jenny Lake" })
photo11 = Photo.create({ user_id: demo.id, title: "What a Grand Canyon", description: "I can;t believe somebody has jumped this enormous crevasse in the ground on a motor bike! What a view!" })
photo12 = Photo.create({ user_id: sample.id, title: "Must be a big horse", description: "The wonders that water can create! Simply stunning." })
photo13 = Photo.create({ user_id: sample.id, title: "Jeep being a Jeep", description: "Here we see a wild jeep in its natural habitat, don't spook it!" })
photo14 = Photo.create({ user_id: sample.id, title: "Air Hug!", description: "It's incredible to see what creations humans have come up with. The amount of technological advancement here is amazing!" })
photo15 = Photo.create({ user_id: sample.id, title: "King of the Jungle", description: "An apex predator at rest." })
photo16 = Photo.create({ user_id: sample.id, title: "Wonder of the new world", description: "Undiscovered by the Spanish, these Incan ruins remain in tact, resting on the Andean mountain range." })
photo17 = Photo.create({ user_id: sample.id, title: "I can fly!", description: "The stunts that these athletes learn to become comfortable with I will never understand." })
photo18 = Photo.create({ user_id: sample.id, title: "Squad", description: "Nothing is a better time than some time on the mountain with a great group of friends!" })
photo19 = Photo.create({ user_id: sample.id, title: "Colorful Sky", description: "Once in a blue moon sunset! So lucky to have been here when it happened." })
photo20 = Photo.create({ user_id: sample.id, title: "Deadly waves", description: "One of the most dangerous surfing destinations on the planet. The water was incredibly forceful but these waves are unlike anywhere else on the globe." })

photo1.photo.attach(io: File.open("/Users/italo/Desktop/Full Stack/CamClickr/app/assets/images/elephant-1.jpg"), filename: "elephant-1.jpg")
photo2.photo.attach(io: File.open("/Users/italo/Desktop/Full Stack/CamClickr/app/assets/images/nature-1.jpg"), filename: "nature-1.jpg")
photo3.photo.attach(io: File.open("/Users/italo/Desktop/Full Stack/CamClickr/app/assets/images/yosemite-valley.jpg"), filename: "yosemite-valley.jpg")
photo4.photo.attach(io: File.open("/Users/italo/Desktop/Full Stack/CamClickr/app/assets/images/light-painting-1.jpg"), filename: "light-painting-1.jpg")
photo5.photo.attach(io: File.open("/Users/italo/Desktop/Full Stack/CamClickr/app/assets/images/ghost-squadron.jpg"), filename: "ghost-squadron.jpg")
photo6.photo.attach(io: File.open("/Users/italo/Desktop/Full Stack/CamClickr/app/assets/images/rally-car.jpg"), filename: "rally-car.jpg")
photo7.photo.attach(io: File.open("/Users/italo/Desktop/Full Stack/CamClickr/app/assets/images/old-faithful.jpg"), filename: "old-faithful.jpg")
photo8.photo.attach(io: File.open("/Users/italo/Desktop/Full Stack/CamClickr/app/assets/images/wingsuit.jpg"), filename: "wingsuit.jpg")
photo9.photo.attach(io: File.open("/Users/italo/Desktop/Full Stack/CamClickr/app/assets/images/motogp.jpg"), filename: "motogp.jpg")
photo10.photo.attach(io: File.open("/Users/italo/Desktop/Full Stack/CamClickr/app/assets/images/jenny-lake.jpg"), filename: "jenny-lake.jpg")
photo11.photo.attach(io: File.open("/Users/italo/Desktop/Full Stack/CamClickr/app/assets/images/grand-canyon-1.jpg"), filename: "grand-canyon-1.jpg")
photo12.photo.attach(io: File.open("/Users/italo/Desktop/Full Stack/CamClickr/app/assets/images/horseshoe-bend-1.jpg"), filename: "horseshoe-bend-1.jpg")
photo13.photo.attach(io: File.open("/Users/italo/Desktop/Full Stack/CamClickr/app/assets/images/jeep-rocks.jpg"), filename: "jeep-rocks.jpg")
photo14.photo.attach(io: File.open("/Users/italo/Desktop/Full Stack/CamClickr/app/assets/images/jet-hug.jpg"), filename: "jet-hug.jpg")
photo15.photo.attach(io: File.open("/Users/italo/Desktop/Full Stack/CamClickr/app/assets/images/lion-1.jpg"), filename: "lion-1.jpg")
photo16.photo.attach(io: File.open("/Users/italo/Desktop/Full Stack/CamClickr/app/assets/images/machu-picchu-1.jpg"), filename: "machu-picchu-1.jpg")
photo17.photo.attach(io: File.open("/Users/italo/Desktop/Full Stack/CamClickr/app/assets/images/motocross-jump.jpg"), filename: "motocross-jump.jpg")
photo18.photo.attach(io: File.open("/Users/italo/Desktop/Full Stack/CamClickr/app/assets/images/snowboard-squad.jpg"), filename: "snowboard-squad.jpg")
photo19.photo.attach(io: File.open("/Users/italo/Desktop/Full Stack/CamClickr/app/assets/images/sunset-1.jpg"), filename: "sunset-1.jpg")
photo20.photo.attach(io: File.open("/Users/italo/Desktop/Full Stack/CamClickr/app/assets/images/cyclops-surfing.jpg"), filename: "cyclops-surfing.jpg")