import * as React from 'react'
import Link from 'next/link'
import Image from 'next/future/image'
import styled from 'styled-components'
import AppSwitch from '~/components/AppSwitch'
import { usePeggedApp, useYieldApp } from '~/hooks'
import { LogoWrapper, Entry, FooterWrapper, Header } from '../shared'
import { navLinks } from '../Links'
import ThemeSwitch from '../ThemeSwitch'
import Logo from '~/assets/logo_white_long.png'
import { useDarkModeManager } from '~/contexts/LocalStorage'

export default function DesktopNav() {
	const isYieldApp = useYieldApp()
	const isPeggedApp = usePeggedApp()
	const [darkMode, toggleDarkMode] = useDarkModeManager()

	const links = isYieldApp ? navLinks.yields : isPeggedApp ? navLinks.stablecoins : navLinks.defi

	return (
		<div className="sidebar-wrapper" data-simplebar="true">
			<Link href="/" passHref>
				<div className="sidebar-header">
					<div>
						<Image src={Logo} alt="DefiLexis Logo" priority />
					</div>
					<div>
						<h4 className="logo-text">DefiLexis</h4>
					</div>
					<div className="toggle-icon ms-auto">
						<i className="bx bx-arrow-to-left"></i>
					</div>
				</div>
			</Link>

			<AppSwitch />

			<ul className="metismenu" id="menu">
				<li>
					{links.main
						.filter((l) => !l.subMenuHeader)
						.map((link) => (
							<React.Fragment key={link.path}>
								<Entry name={link.name} url={link.path} Icon={link.icon} newTag={link.newTag} />
							</React.Fragment>
						))}
				</li>

				<FooterWrapper>
					{links.footer.map((link) => {
						if ('onClick' in link) {
							return (
								<button key={link.name} onClick={link.onClick}>
									{link.name}
								</button>
							)
						} else {
							return (
								<React.Fragment key={link.name}>
									<Link href={link.path} key={link.path} prefetch={false} passHref>
										<a target="_blank" rel="noopener noreferrer">
											{link.name}
										</a>
									</Link>
								</React.Fragment>
							)
						}
					})}
				</FooterWrapper>

				<ThemeSwitch isActive={darkMode} toggle={toggleDarkMode} />
			</ul>
		</div>
	)
}

export const Wrapper = styled(Header)`
	display: none;

	@media (min-width: ${({ theme: { bpLg } }) => bpLg}) {
		display: flex;
	}
`

const Nav = styled.nav`
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	gap: 20px;
`
