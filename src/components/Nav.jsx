import React from 'react';
import Link from 'next/link';

const Nav = () => {
    return (
        <nav className='py-3 px-8'>
            <div className="flex items-center justify-between gap-3">
                <Link href="/" className='text-[17px] text-gray-800 font-[600] hover:text-primary'>Home</Link>
                <Link href="/fruits" className='text-[17px] text-gray-800 font-[600] hover:text-primary'>Fruits & Vegetables</Link>
                <Link href="/meats" className='text-[17px] text-gray-800 font-[600] hover:text-primary'>Meats & Seafood</Link>
                <Link href="/breakfast" className='text-[17px] text-gray-800 font-[600] hover:text-primary'>Breaksfast & Dairy</Link>
                <Link href="/breads"className='text-[17px] text-gray-800 font-[600] hover:text-primary'>Breads & Bakery</Link>
                <Link href="/beverages"className='text-[17px] text-gray-800 font-[600] hover:text-primary'>Beverages</Link>
                <Link href="/fronzen"className='text-[17px] text-gray-800 font-[600] hover:text-primary'>Frozen Foods</Link>
                <Link href="/biscuits"className='text-[17px] text-gray-800 font-[600] hover:text-primary'>Biscuits & Snacks</Link>
                <Link href="/frocery"className='text-[17px] text-gray-800 font-[600] hover:text-primary'>Grocery & Staples</Link>
                <Link href="/more"className='text-[17px] text-gray-800 font-[600] hover:text-primary'>More</Link>
            </div>
        </nav>
    );
};

export default Nav;