import React from 'react';
import useTitle from '../../../Hoocks/useTitle';

const Blog = () => {
    useTitle('Blog');
    return (
        <div className='m-11 rounded-lg'>
            <div className='bg-red-400 p-5 mb-5 rounded-lg'>
                <h3 className='text-2xl'>Qus 1: What is the differences between SQL and NoSQL?</h3>
                <p>Anss: SQL databases are vertically scalable, while NoSQL databases are
                    horizontally scalable. SQL databases are table-based, while NoSQL
                    databases are document, key-value, graph, or wide-column stores. SQL
                    databases are better for multi-row transactions, while NoSQL is
                    better for unstructured data like documents or JSON.</p>
            </div>
            <div className='bg-blue-400 p-5 mb-5 rounded-lg'>
                <h3 className='text-2xl'>Qus 2:JSON Web Token (JWT) is an open standard (RFC 7519) that defines a</h3>
                <p>Anss: JSON Web Token (JWT) is an open standard (RFC 7519) that defines a
                    compact and self-contained way for securely transmitting information
                    between parties as a JSON object. This information can be verified
                    and trusted because it is digitally signed.</p>
            </div>
            <div className='bg-pink-400 p-5 mb-5 rounded-lg'>
                <h3 className='text-2xl'>Qus 3:Qus : What is the difference between javascript and NodeJS? </h3>
                <p>Anss: JavaScript is a simple programming language that can be used with
                    any browser that has the JavaScript Engine installed. Node. js, on
                    the other hand, is an interpreter or execution environment for the
                    JavaScript programming language.</p>
            </div>
            <div className='bg-yellow-700 p-5 mb-5 rounded-lg'>
                <h3 className='text-2xl'>Qus : How does NodeJS handle multiple requests at the same time?</h3>
                <p>Anss: NodeJS receives multiple client requests and places them into
                    EventQueue. NodeJS is built with the concept of event-driven
                    architecture. NodeJS has its own EventLoop which is an infinite loop
                    that receives requests and processes them</p>
            </div>

        </div>
    );
};

export default Blog;