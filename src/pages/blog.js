import React, { useState, useEffect } from 'react'
import '../style/blog.css'

import Layout from '../components/Layout'
import Collapsible from 'react-collapsible';

import { db } from '../db/firebase-config'
import { collection, getDocs, orderBy, query } from 'firebase/firestore'

const BlogPage = () => {
  const blogsCollectionRef = collection(db, "blogs");
  var [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const getBlogs = async () => {
      const data = await getDocs(query(blogsCollectionRef, orderBy('ts')));
      setBlogs(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    }

    getBlogs()
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    < >
      <Layout pageTitle="Blog">
        <div className='mt-3 ml-4 text-white'>
          <p>This page isn't ready! Check back soon.</p>
        </div>
        <div className='mt-3'>
          {blogs.map((blog) => {
            return (
              <Collapsible key={blog.id} trigger={<strong>{blog.title}</strong>}>
                <small>{blog.date}</small>
                <p />
                <small>
                  {blog.content}
                </small>
              </Collapsible>
            );
          })}
        </div>
      </Layout>
    </>
  );
}

export default BlogPage;
