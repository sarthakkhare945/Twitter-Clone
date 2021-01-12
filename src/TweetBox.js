import React, { useState } from 'react';
import './TweetBox.css';
import sart from '../src/image/sart.jpg'
import { Avatar, Button } from '@material-ui/core';
import db from './firebase';


function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState('');
    const [tweetImage, setTweetImage] = useState('');

    const sendTweet = (e) =>{
        e.preventDefault();

        db.collection('posts').add({
            displayName : 'Sandy Sander',
            userName: 'sarthakkhare945',
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: 
            'https://images.unsplash.com/photo-1575042124694-d6fbe9082142?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9',
        });

        setTweetMessage('');
        setTweetImage('');
    };


    return <div className='tweetBox'>
        <form>

            <div className='tweetBox__input'>

                <Avatar src={sart} />
                <input
                onChange={(e) => setTweetMessage(e.target.value)}
                
                 value={tweetMessage} 
                 placeholder="What's happening" type='text'/>
                {/* <input placeholder="What's happening" type='text'/> */}
                
            </div>
            <input 
            value = {tweetImage}
            onChange={(e) => setTweetImage(e.target.value)}
            className='tweetBox__imageInput'
            placeholder='Optional: Enter Image URL'
            type='text'
            />
            <Button onClick={sendTweet} type='submit' 
            className='tweetBox_tweetButton'>
            Tweet
            </Button>
            
        </form>
    </div>



}

export default TweetBox;




