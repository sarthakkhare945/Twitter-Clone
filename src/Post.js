import { Avatar } from '@material-ui/core';
import React,{forwardRef} from 'react';
import './Post.css';
import sart from '../src/image/sart.jpg';
import  VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import  ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';



const Post = forwardRef(
    ({
    displayName,
    userName,
    verified,
    text,
    image,
    avatar
},ref) => {

    return (

        <div className='post'ref={ref}>
            <div className='post__avatar'>
                <Avatar src={avatar} />
            </div>
            <div className='post__body'>
                <div className='post__header'>
                    <div className='headerText'>
                        <h3>
                            {displayName}{' '}
                            <span className='post__headerSpecial'>
                                    {/* for verified BADGE */}
                               {verified && <VerifiedUserIcon className='post__badge' /> }
                                @{userName}


                            </span>
                        </h3>


                    </div>
                    <div className='post__headerDescription'>
                        <p>{text}</p>
                    </div>
                </div>
                <img src={image} alt='' />
                <div className='post__footer'>
                    <ChatBubbleOutlineIcon fontSize='small'/>
                    <RepeatIcon fontSize='small'/>
                    <FavoriteBorderIcon fontSize='small'/>
                    <PublishIcon fontSize='small'/>

                </div> 
            
            </div>
        </div>


    
    );
});

export default Post;



// 4/1AY0e-g5zjHYzfS8IYq_XrJzs6Zzz1wkMPvYS5Op_DI1Bkan5wgpkMC_khCA