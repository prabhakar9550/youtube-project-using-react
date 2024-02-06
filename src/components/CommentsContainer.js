import React from 'react'

const commentsData = [
    {
        name: "Prabhakar",
        text: "Lorem ipsm dolor sit amet, consetetur adip",
        replies: []
    },
    {
        name: "Prabhakar",
        text: "Lorem ipsm dolor sit amet, consetetur adip",
        replies: [ {
            name: "Prabhakar",
            text: "Lorem ipsm dolor sit amet, consetetur adip",
            replies: []
        },
        {
            name: "Prabhakar",
            text: "Lorem ipsm dolor sit amet, consetetur adip",
            replies: []
        },
        {
            name: "Prabhakar",
            text: "Lorem ipsm dolor sit amet, consetetur adip",
            replies: [ {
                name: "Prabhakar",
                text: "Lorem ipsm dolor sit amet, consetetur adip",
                replies: [ {
                    name: "Prabhakar",
                    text: "Lorem ipsm dolor sit amet, consetetur adip",
                    replies: [ {
                        name: "Prabhakar",
                        text: "Lorem ipsm dolor sit amet, consetetur adip",
                        replies: []
                    }, {
                        name: "Prabhakar",
                        text: "Lorem ipsm dolor sit amet, consetetur adip",
                        replies: []
                    },]
                },]
            },
        ]
        },
    ]
    },
    {
        name: "Prabhakar",
        text: "Lorem ipsm dolor sit amet, consetetur adip",
        replies: []
    },
    {
        name: "Prabhakar",
        text: "Lorem ipsm dolor sit amet, consetetur adip",
        replies: []
    },
    {
        name: "Akshay Saini",
        text: "Lorem ipsm dolor sit amet, consetetur adip",
        replies: []
    },
   
];


const Comment = ({data}) => {

    const { name, text, repiles} = data;
    return (<div className='flex shadow-sm bg-gray-100 p-2 rounded-lg my-2'>
        <img 
            className='w-12 h-12'
            alt="user"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMCnKVdb6r65QZHqRYFJ8Bo_LK2_RmQH1quU0kEoKJEqxkHgJP53wS6tFUqAZD-0CY2GU&usqp=CAU"
            />
            <div className='px-3'>
                <p className='font-bold'>{name}</p>
                <p>{text}</p>

            </div>
    </div>)
};

const CommemtsList = ({comments}) => {
    return comments.map((comment, index) =>  (
    <div key={index}>
    <Comment  data={comment}/>
    <div className='pl-5 border border-l-black m-5'>
    <CommemtsList  comments={comment.replies}/>
    </div>
    </div>
    ));
          
};

const CommentsContainer = () => {
  return (
    <div className='m-5 p-2'>
        <h1 className='text-2xl font-bold'>Comments: </h1>
        <CommemtsList comments={commentsData}/>
    </div>
  )
}

export default CommentsContainer