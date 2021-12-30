import React, { useState, useEffect } from 'react'
import '../style/blog.css'

import Layout from '../components/Layout'
import Collapsible from 'react-collapsible';
import { Button, Container, Row, Col } from 'react-bootstrap';

import { db } from '../db/firebase-config'
import { collection, getDocs, addDoc, doc, deleteDoc, Timestamp, query, orderBy } from 'firebase/firestore'

const BlogCRUDPage = () => {
  const blogsCollectionRef = collection(db, "blogs");
  const [blogs, setBlogs] = useState([]);
  const [newTitle, setNewTitle] = useState("");
  const [newDate, setNewDate] = useState("");
  const [newContent, setNewContent] = useState("");
  const today = new Date();

  const createBlog = async () => {
    console.log("creating blog");
    await addDoc(blogsCollectionRef, {title: newTitle, date: newDate, content: newContent, ts: new Timestamp(Math.floor((today.getTime())/(1000)), 0) });
  } 

  const deleteBlog = async (id) => {
    console.log("deleting blog with id: " + id);
    const docRef = doc(db, "blogs", id);
    await deleteDoc(docRef);
  }

  useEffect(() => {
    const getBlogs = async () => {
      const data = await getDocs(query(blogsCollectionRef, orderBy('ts')))
      setBlogs(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
    }

    getBlogs()
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    < >
      <Layout pageTitle="Blog">
        <div className='mt-3'>
            <h5 className='text-white m-auto w-50'>This is a CRUD application for the blog on my website. Congrats if you found this. Please don't touch anything unless you're me.</h5>
        </div>
        <Container>
            <Row className='mt-3'>
                <Col xs="6">
                    <input type='text' placeholder='Title...' className='w-100' onChange={(event) => {setNewTitle(event.target.value)}}></input>
                </Col>
                <Col xs="4">
                    <input type='text' placeholder='Date...' className='w-100' onChange={(event) => {setNewDate(event.target.value)}}></input>
                </Col>
                <Col xs="2">
                    <input type='button' value="Submit" className='w-100' onClick={() => createBlog()}></input>
                </Col>
            </Row>
            <Row className='mt-2'>
                <Col>
                    <textarea placeholder='Content...' className='w-100' rows={12} onChange={(event) => {setNewContent(event.target.value)}}></textarea>
                </Col>
            </Row>
        </Container>
        <div className='mt-3 mb-5'>
          {blogs.map((blog) => {
          return (
            <Collapsible key={blog.id} trigger={<strong>{blog.title}</strong>}>
                <small>{blog.date}</small>
                <p />
                <small className='multiline'>
                {blog.content}
                </small>
                <br />
                <Button className="mt-3 w-25" variant='outline-danger' onClick={() => deleteBlog(blog.id)}>
                Delete
                </Button>
            </Collapsible>
          );
        })}
        </div>
      </Layout>
    </>
  );
}

export default BlogCRUDPage;
