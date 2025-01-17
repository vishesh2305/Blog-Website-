import React, { useState, useContext, useEffect } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { BsFillArrowLeftCircleFill } from "react-icons/bs"
import myContext from '../../../context/data/myContext';
import { Link, Navigate, useNavigate } from "react-router-dom";
import Layout from '../../../components/layout/Layout'
import { Timestamp } from 'firebase/firestore';
import { ref } from 'firebase/database';
import { uploadBytes } from 'firebase/storage';
import { getDownloadURL } from 'firebase/storage';
import { collection } from 'firebase/firestore';
import { addDoc } from 'firebase/firestore';




import {
    Button,
    Typography,
} from "@material-tailwind/react";
import toast from 'react-hot-toast';

function CreateBlog() {
    const navigate = useNavigate();

    const [blogs, setBlogs] = useState({ title: '', category: '', content: '', time: Timestamp.now(), });
    const [thumbnail, setthumbnail] = useState();
    const [text, settext] = useState('');


    // Add post function

    const addPost = async () => {
        if(blogs.title == "" || blogs.category == "" || blogs.content === "" || blogs.thumbnail === "") {
            toast.error('Please Fill All Fields');
        }

        uploadImage()
    }


    // Upload image function

    const uploadImage = async () => {
        if (!thumbnail) return;
        const imageRef = ref(storage, `blogimage/${thumbnail.name}`);
        uploadBytes(imageRef, thumbnail).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
                const productRef = collection(fireDb, "blogPost")
                try {
                    addDoc(productRef, {
                        blogs,
                        thumbnail: url,
                        time: Timestamp.now(),
                        date: new Date().toLocaleString(
                            "en-US",
                            {
                                month: "short",
                                day: "2-digit",
                                year: "numeric",
                            }
                        )

                    })
                    Navigate('/dashboard')
                    toast.success('Post Added Successfully');
                }
                catch (error) {
                    toast.error(error)
                    console.log(error)
                }
            });
        });
    }


    // Create markup function 
    function createMarkup(c) {
        return { __html: c };
    }

    useEffect(() => {
        settext(blogs.content);
    }, [blogs]);

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/BlogInfo', {state : {blog: blogs, thumbnail: thumbnail}})
    };

    return (

        <Layout>
        <div className=' container mx-auto max-w-5xl py-6 my-10'>
            <div className="p-5">
                {/* Top Item  */}
                <div className="mb-2 flex justify-between">
                    <div className="flex gap-2 items-center">
                        {/* Dashboard Link  */}
                        <Link to={'/dashboard'}>
                            <BsFillArrowLeftCircleFill size={25} />
                        </Link>

                        {/* Text  */}
                        <Typography
                            variant="h4"
                        >
                            Create blog
                        </Typography>
                    </div>
                </div>

                {/* main Content  */}
                <div className="mb-3">
                    {/* Thumbnail  */}
                    {thumbnail && <img className=" w-full rounded-md mb-3 "
                        src={thumbnail
                            ? URL.createObjectURL(thumbnail)
                            : ""}
                        alt="thumbnail"
                    />}

                    {/* Text  */}
                    <Typography
                        variant="small"
                        color="blue-gray"
                        className="mb-2 font-semibold"
                    >
                        Upload Thumbnail
                    </Typography>

                    {/* First Thumbnail Input  */}
                    <input
                        type="file"
                        label="Upload thumbnail"
                        className="shadow-[inset_0_0_4px_rgba(0,0,0,0.6)] placeholder-black w-full rounded-md p-1"
                        onChange={(e) => setthumbnail(e.target.files[0])}
                    />
                </div>

                {/* Second Title Input */}
                <div className="mb-3">
                    <input
                        label="Enter your Title"
                        value={blogs.title}
                        onChange={(e) => setBlogs({ ...blogs, title: e.target.value })}
                        className="shadow-[inset_0_0_4px_rgba(0,0,0,0.6)] w-full rounded-md p-1.5 outline-none"
                        placeholder="Enter Your Title"
                        name="title"
                    />
                </div>

                {/* Third Category Input  */}
                <div className="mb-3">
                    <input
                        label="Enter your Category"
                        value={blogs.category}
                        onChange={(e) => setBlogs({ ...blogs, category: e.target.value })}
                        className="shadow-[inset_0_0_4px rgba(0,0,0,0.6)] w-full rounded-md p-1.5 outline-none"
                        placeholder="Enter Your Category"
                        name="category"
                    />
                </div>

                {/* Four Editor  */}
                <Editor
                    apiKey='ceu0acsncvo8btqgfeaecvultukcnzksak2q49xwiicdu56u'
                    value={blogs.content}
                    onEditorChange={(newValue) => {
                        setBlogs({ ...blogs, content: newValue });
                    }}
                    init={{
                        plugins: 'a11ychecker advcode advlist advtable anchor autocorrect autolink autoresize autosave casechange charmap checklist code codesample directionality editimage emoticons export footnotes formatpainter fullscreen help image importcss inlinecss insertdatetime link linkchecker lists media mediaembed mentions mergetags nonbreaking pagebreak pageembed permanentpen powerpaste preview quickbars save searchreplace table tableofcontents template tinydrive tinymcespellchecker typography visualblocks visualchars wordcount'
                    }}
                />

                {/* Five Submit Button  */}
                <Button className=" w-full mt-5"
                    onClick={handleSubmit}
                >
                    Send
                </Button>

                {/* Six Preview Section  */}
                <div className="">
                    <h1 className=" text-center mb-3 text-2xl">Preview</h1>
                    <div className="content">
                        <div
                            className=" [&> h1]:text-[32px] [&>h1]:font-bold  [&>h1]:mb-2.5
                            [&>h2]:text-[ 24px] [&>h2]:font-bold [&>h2]:mb-2.5
                            [&>h3]:text-[18.72] [&>h3]:font-bold [&>h3]:mb-2.5
                            [&>h4]:text-[16px] [&>h4]:font-bold [&>h4]:mb-2.5
                            [&>h5]:text-[13.28px] [&>h5]:font-bold [&>h5]:mb-2.5
                            [&>h6]:text-[10px] [&>h6]:font-bold [&>h6]:mb-2.5
                            [&>p]:text-[16px] [&>p]:mb-1.5
                            [&>ul]:list-disc [&>ul]:mb-2
                            [&>ol]:list-decimal [&>li]:mb-10
                            [&>li]:list-decimal [&>ol]:mb-2
                            [&>img]:rounded-lg"
                            dangerouslySetInnerHTML={createMarkup(blogs.content)}>
                        </div>
                    </div>
                </div>
            </div>
        </div>

       </Layout> 
    )
}

export default CreateBlog;