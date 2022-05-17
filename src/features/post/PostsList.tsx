import { SyntheticEvent } from 'react';
import { postAPI } from './PostService';
import Preloader from '../../components/Preloader';
import {v4 as uuidv4} from 'uuid';


const PostsList = () => {
    const { data: posts, isLoading } = postAPI.useFetchAllPostsQuery();
    const [deletePost, {}] = postAPI.useDeletePostMutation();
    const [appendPost, {}] = postAPI.useAppendPostMutation();

    const handleSumbit = (e: SyntheticEvent) => {
        e.preventDefault();

        const target = e.target as typeof e.target & {
            author: { value: string },
            title: { value: string },
        };

        appendPost({
            id: uuidv4(),
            author: target.author.value,
            title: target.title.value,
        });
    }

    if (isLoading) {
        return (<Preloader />);
    }
    
    return (
        <div className='w-1/2 h-fit text-center'>
            <h1 className='pb-4'>Спиок публикаций</h1>
            <form className='w-full border-gray-900 h-fit border-solid border-2 my-2 pt-2 flex flex-col items-center'
                  onSubmit={handleSumbit}
            >
                <input className="w-64 mb-1 shadow appearance-none border rounded" type='text' name='author' placeholder='Author' />
                <input className="w-64 mb-1 shadow appearance-none border rounded" type='text' name="title"  placeholder='Title' />
                <button className='w-20 h-6 bg-green-500 text-white mb-2' type='submit'>Добавить</button>
            </form>
            {posts && posts.map((item) => (
                <div key={item.id} className='w-full border-gray-900 h-fit border-solid border-2 my-2 pt-2'>
                    <div>Author: {item.author}</div>
                    <div>
                        <strong>{item.title}</strong>
                    </div>
                    <div>
                        <button className='w-20 h-6 bg-red-500 text-white mt-2 mb-2'
                                onClick={() => deletePost(item.id)}
                        >Удалить</button>
                    </div>
                </div>
            ))}
        </div>
    );
};


export default PostsList;