import { Image, RichText, Text, types } from 'react-bricks/frontend'
import Link from 'next/link'

//=============================
// Local Types
//=============================
type Padding = 'big' | 'small'

interface HeroUnitProps {
  padding: Padding
  title: string
  text: string
}

//=============================
// Component to be rendered
//=============================
const MyCustomHero: types.Brick<HeroUnitProps> = ({ padding }) => {
  return (
    <>
        <main className="container max-w-full mx-auto relative">
            <div className="flex flex-wrap">
                <div className="w-full p-0 home-section">
                    <div className="h-full">
                        <div className="container-jumbotron bg-blue h-full">
                            <div className="half-left-banner">
                                <div className="wrapper">
                                    <header className='text-black'>
                                        <Text 
                                            renderBlock={(props)=> (
                                                <h1 className="leadingTitle">{props.children}</h1>
                                            )}
                                            renderPlaceholder={(props) => (
                                                <span className="opacity-30">{props.children}</span>
                                            )}
                                            placeholder="Type a title..."
                                            propName="title"
                                        />
                                        <p>From design to Build!</p>
                                    </header>
                                    <div className="block mb-4">
                                        <Link href="#project" className="button button-black">See Our Projects</Link>
                                    </div>
                                    <Image alt="KIS Logo" imageClassName="block max-w-full h-auto" maxWidth={200} />
                                </div>
                            </div>
                            {/* <div className="half-right-banner relative">
                                <figure>
                                    <Image alt="Big Skatepark Image" imageClassName="max-w-full h-auto" maxWidth={900} />
                                    <figcaption>
                                        <p>Wibawa Mukti International Skatepark</p>
                                        <p className="subcaption">Bekasi, Cikarang - West Java</p>
                                    </figcaption>
                                </figure>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="flex flex-wrap ">
                <div className="w-full clients">
                    <div className="flex justify-evenly py-4 items-center client-wrapper">
                        <Image alt="Client Logo" imageClassName="client-logo max-w-full" maxWidth={400} />
                        <Image alt="Client Logo" imageClassName="client-logo max-w-full" maxWidth={400} />
                        <Image alt="Client Logo" imageClassName="client-logo max-w-full" maxWidth={400} />
                        <Image alt="Client Logo" imageClassName="client-logo max-w-full" maxWidth={400} />
                        <Image alt="Client Logo" imageClassName="client-logo max-w-full" maxWidth={400} />
                    </div>
                </div>
            </div> */}
        </main>
    </>
  )
}

//=============================
// Brick Schema
//=============================
MyCustomHero.schema = {
    name: 'my-custom-hero',
    label: 'My Custom Hero',
    previewImageUrl: `/bricks-preview-images/custom-hero-unit.png`,
    getDefaultProps: () => ({
        padding: 'big',
        title: 'This is a custom Hero Unit',
        text: "We are a hi-tech web development company committed to deliver great products on time. We love to understand our customers' needs and exceed expectations.",
    }),
    sideEditProps: [{
        name: 'padding',
        label: 'Padding',
        type: types.SideEditPropType.Select,
        selectOptions: {
            display: types.OptionsDisplay.Select,
            options: [{
                    value: 'big',
                    label: 'Big Padding'
                },
                {
                    value: 'small',
                    label: 'Small Padding'
                },
            ],
        },
    }, ],
}

export default MyCustomHero
