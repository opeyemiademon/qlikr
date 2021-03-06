import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/router';
const Footer =()=> {

	const router = useRouter()
	const title:string = router.asPath;

  return (
    <>
    	<div className="page-footer">
			<div className="toolbar app-customtoolbar">
				<div className="toolbar-inner">
				<Link href="/">
					<a  className={`nav-link tab-link categorylist    ${title==='/'?'tab-link-active':''}`}  title="">
						<span className="tabbar-label text-color">
							<span className="icon-home"></span>
						</span>
						<p className="tb-txt text-color">Home</p> 
					</a>
				</Link>


					<Link href="/articles-list">
					<a  className={`nav-link tab-link categorylist    ${title==='/articles-list'?'tab-link-active':''}`}  title="">
						<span className="tabbar-label text-color">
							<span className="icon-videos"></span>
						</span>
						<p className="tb-txt text-color">News</p>
					</a></Link>

					<Link href="/categories">
					<a  className={`nav-link tab-link categorylist    ${title==='/categories'?'tab-link-active':''}`}   title="">
						<span className="tabbar-label text-color">
							<span className="icon-categories"></span>
						</span>
						<p className="tb-txt text-color">Categories </p>
					</a></Link>


					<Link href="/">
					<a  className="nav-link tab-link categorylist"  title="">
						<span className="tabbar-label text-color">
							<span className="icon-authors"></span>
						</span> 
						<p className="tb-txt text-color">Premium</p>
					</a></Link>


					<Link href="/settings">
					<a  className={`nav-link tab-link categorylist    ${title==='/settings'?'tab-link-active':''}`}   title="">
						<span className="tabbar-label text-color">
							<span className="icon-settings"></span>
						</span>
						<p className="tb-txt text-color">Settings</p>
					</a></Link>
				</div>
			</div>
		</div>
    </>
  )
}

export default Footer