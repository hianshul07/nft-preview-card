import equilibriumImage from './assets/image-equilibrium.jpg';
import ethereumImage from './assets/icon-ethereum.svg';
import clockImage from './assets/icon-clock.svg';
import profileImage from './assets/image-avatar.png';
import imageView from './assets/icon-view.svg';
// import
import './App.css';

function App() {
	return (
		<div className='app'>
			<div className='card' style={{ gap: '20px' }}>
				<div className='image-container' style={{ borderRadius: '0.6rem' }}>
					<img
						src={equilibriumImage}
						alt='-image-equilibrium'
						className='image'
						style={{
							display: 'block',
							width: '100%',
						}}
					/>
					<img src={imageView} alt='' className='hover-image' />
					<div className='overlay'></div>
				</div>
				<h1 className='heading' style={{ fontSize: '1.2rem', fontWeight: '700' }}>
					Equilibrium #3429
				</h1>
				<p style={{ fontSize: '16px', fontWeight: '200' }}>
					Our Equilibrium collection promotes balance and calm.
				</p>
				<div
					className='price'
					style={{
						display: 'flex',
						justifyContent: 'space-between',
						width: 'full',
					}}
				>
					<div className='left' style={{ display: 'flex', gap: '6px' }}>
						<img
							src={ethereumImage}
							alt='ethereum-image'
							style={{ height: '20px', width: 'auto', objectFit: 'contain' }}
						/>{' '}
						<span style={{ color: '#00fff8' }}>0.041 ETH</span>
					</div>
					<div
						className='right'
						style={{
							display: 'flex',
							alignItems: 'center',
							width: '100px',
							gap: '6px',
						}}
					>
						<img
							src={clockImage}
							alt=''
							style={{ height: '16px', display: 'block' }}
						/>

						<span>3 days left</span>
					</div>
				</div>
				<div className='line'></div>
				<div className='credits'>
					<img
						src={profileImage}
						alt=''
						style={{
							height: '28px',
							border: '1px solid white',
							borderRadius: '100%',
						}}
					/>
					<p>
						Creation of <span className='name'>Jules Wyvren</span>
					</p>
				</div>
			</div>
		</div>
	);
}

export default App;

