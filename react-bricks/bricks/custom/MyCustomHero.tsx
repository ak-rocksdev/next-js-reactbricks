import { Image, RichText, Text, types } from 'react-bricks/frontend'
import Link from 'next/link'

//=============================
// Local Types
//=============================
type Padding = 'usePadding' | 'noPadding'

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
                <div className={`w-full p-0 home-section ${
                    padding === 'usePadding' ? 'py-20' : ''
                }`}>
                    <div className="h-full">
                        <div className={`container-jumbotron bg-blue h-full`}>
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
                                        <Text 
                                            renderBlock={(props)=> (
                                                <p>{props.children}</p>
                                            )}
                                            renderPlaceholder={(props) => (
                                                <span className="opacity-30">{props.children}</span>
                                            )}
                                            placeholder="Type something"
                                            propName="description"
                                        />
                                    </header>
                                    <Text 
                                        renderBlock={(props)=> (
                                            <div className="block mb-4">
                                                <Link href="#project" className="button button-black">{props.children}</Link>
                                            </div>
                                        )}
                                        renderPlaceholder={(props) => (
                                            <span className="opacity-30">{props.children}</span>
                                        )}
                                        placeholder="Type something"
                                        propName="button"
                                    />
                                </div>
                            </div>
                            <div className="half-right-banner relative">
                                <figure>
                                    {/* <Image 
                                        alt="Your Alt Text Here"
                                        propName="image" 
                                        imageClassName="block max-w-full h-auto" 
                                        maxWidth={200} 
                                        renderWrapper={({children, width, height})=> (
                                            <div className="wrapper">
                                                {children}
                                            </div>
                                        )}
                                    /> */}
                                    <Image alt="Big Skatepark Image"
                                        propName="image"
                                        imageClassName="w-full h-full"
                                        maxWidth={900} 
                                        renderWrapper={({children, width, height})=> (
                                            <div className='w-full h-full'>
                                                {children}
                                            </div>
                                        )}
                                    />
                                    <figcaption>
                                        <Text 
                                            renderBlock={(props)=> (
                                                <div>
                                                    <p>{props.children}</p>
                                                </div>
                                            )}
                                            renderPlaceholder={(props) => (
                                                <span className="opacity-30">{props.children}</span>
                                            )}
                                            placeholder="Type something"
                                            propName="subtitle"
                                        />
                                        <Text 
                                            renderBlock={(props)=> (
                                                <div>
                                                    <p className="subcaption">{props.children}</p>
                                                </div>
                                            )}
                                            renderPlaceholder={(props) => (
                                                <span className="opacity-30">{props.children}</span>
                                            )}
                                            placeholder="Type something"
                                            propName="subtitle-2"
                                        />
                                    </figcaption>
                                </figure>
                            </div>
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
        padding: 'usePadding',
        title: 'This is a custom Hero Unit',
        description: "type your description here",
        button: "Here's a button",
        subtitle: "Type your subtitle here",
        subtitle2: "Type your text here",
    }),
    sideEditProps: [{
        name: 'padding',
        label: 'Padding',
        type: types.SideEditPropType.Select,
        selectOptions: {
            display: types.OptionsDisplay.Select,
            options: [{
                    value: 'usePadding',
                    label: 'Use Padding'
                },
                {
                    value: 'noPadding',
                    label: 'No Padding'
                },
            ],
        },
    }, ],
}

export default MyCustomHero
