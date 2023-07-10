/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use.
use('example-18');

// Insert a few documents into the sales collection.
// db.getCollection('users').insertMany([
//   { 'name': 'Bart Simpson', 'email': 'bart@simpson', 'nickname': 'bart' },
//   { 'name': 'Homer Simpson', 'email': 'homer@simpson', 'nickname': 'homer' },
// ]);

// const bart = db.getCollection('users').findOne({ 'nickname': 'bart' });
// const homer = db.getCollection('users').findOne({ 'nickname': 'homer' });

const bartId = "64ab5260b326d4e9b1070bf8";

const postId1 = "64ab0321e85cf54f748cb3c0";
const postId2 = "64ab0321e85cf54f748cb3c1";
const postId3 = "64ab0321e85cf54f748cb3c2";

db.getCollection('posts').updateOne({ _id: postId1 }, { $set: { "user_id": bartId } });
db.getCollection('posts').updateOne({ _id: postId2 }, { $set: { "user_id": bartId } });
db.getCollection('posts').updateOne({ _id: postId3 }, { $set: { "user_id": bartId } });