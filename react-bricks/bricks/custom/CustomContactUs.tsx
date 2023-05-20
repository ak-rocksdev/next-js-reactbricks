import { Image, RichText, Text, types, Link } from 'react-bricks/frontend'

//=============================
// Local Types
//=============================
type Padding = 'usePadding' | 'noPadding'

export interface ContactUnitProps {
    padding: Padding
    title: string
    text: string
    withLink1: boolean
    withLink2: boolean
    linkText: any
    linkText2: any
    linkPath1: string
    linkPath2: string
}
//=============================
// Component to be rendered
//=============================
const CustomContactUs: types.Brick<ContactUnitProps> = ({ 
    padding,
    withLink1,
    withLink2,
    linkText,
    linkText2,
    linkPath1,
    linkPath2
}) => {
    return (
            <>
                <div id="contact" className="container max-w-full mx-auto">
                    <div className="flex flex-wrap ">
                        <div className="w-full p-0 bg-white">
                            <div className="flex flex-wrap  m-0">
                                <div className="w-full lg:w-1/3 pr-4 pl-4 order-2 lg:order-1 p-0">
                                    <div className="wrapper">
                                        <p className="font-bold label label-blue">Contact Us</p>
                                        <Text 
                                            renderBlock={(props)=> (
                                                <div>
                                                    <h2 className="font-bold section-title">{props.children}</h2>
                                                </div>
                                            )}
                                            renderPlaceholder={(props) => (
                                                <span className="opacity-30">{props.children}</span>
                                            )}
                                            placeholder="Type something"
                                            propName="title"
                                        />
                                        <Text 
                                            renderBlock={(props)=> (
                                                <div className="inline">
                                                    <h3 className="font-bold m-0">{props.children}</h3>
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
                                                <p>
                                                    {props.children}
                                                </p>
                                            )}
                                            renderPlaceholder={(props) => (
                                                <span className="opacity-30">{props.children}</span>
                                            )}
                                            placeholder="Your Address"
                                            propName="address"
                                        />
                                        <Text 
                                            renderBlock={(props)=> (
                                                <div className="inline">
                                                    <h3 className="font-bold m-0">{props.children}</h3>
                                                </div>
                                            )}
                                            renderPlaceholder={(props) => (
                                                <span className="opacity-30">{props.children}</span>
                                            )}
                                            placeholder="Your Phone"
                                            propName="phone"
                                        />
                                        <Text 
                                            renderBlock={(props)=> (
                                                <div className="inline">
                                                    <h3 className="font-bold m-0">{props.children}</h3>
                                                </div>
                                            )}
                                            renderPlaceholder={(props) => (
                                                <span className="opacity-30">{props.children}</span>
                                            )}
                                            placeholder="Your Email"
                                            propName="email"
                                        />
                                        <RichText 
                                            renderBlock={(props)=> (
                                                <p>
                                                    {props.children}
                                                </p>
                                            )}
                                            renderPlaceholder={(props) => (
                                                <span className="opacity-30">{props.children}</span>
                                            )}
                                            placeholder="Your Opening Time"
                                            propName="openingTime"
                                        />
                                        
                                        <div className="flex button-container mt-5">
                                            {withLink1 && (
                                            <Link 
                                                href={linkPath1}
                                                className="inline-block align-middle text-white text-center select-none border font-normal whitespace-no-wrap rounded-none py-3 px-6 leading-normal no-underline btn-whatsapp"
                                                target="_blank">
                                                    <Text 
                                                        renderBlock={(props)=> (
                                                            <span>{props.children}</span>
                                                        )}
                                                        renderPlaceholder={(props) => (
                                                            <span className="opacity-30">{props.children}</span>
                                                        )}
                                                        placeholder="Your Text"
                                                        propName="linkText"
                                                    />
                                                
                                            </Link>
                                            )}
                                            {withLink2 && (
                                            <Link 
                                                href={linkPath2}
                                                className="inline-block align-middle text-white text-center select-none border font-normal whitespace-no-wrap rounded-none py-3 px-6 leading-normal no-underline btn-black"
                                                target="_blank">
                                                    <Text 
                                                        renderBlock={(props)=> (
                                                            <span>{props.children}</span>
                                                        )}
                                                        renderPlaceholder={(props) => (
                                                            <span className="opacity-30">{props.children}</span>
                                                        )}
                                                        placeholder="Your Text"
                                                        propName="linkText2"
                                                    />
                                                
                                            </Link>
                                            )}
                                            {/* <a href="https://www.instagram.com/labskate.id"
                                                className="inline-block align-middle text-white text-center select-none border font-normal whitespace-no-wrap rounded-none py-3 px-6 leading-normal no-underline btn-black"
                                                target="_blank">
                                                <span>Follow Us</span>
                                            </a> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full lg:w-2/3 pr-4 pl-4 order-1 lg:order-2 p-0 h-auto">
                                    <Image
                                        propName="image"
                                        alt="Contact Us Cover"
                                        aspectRatio={1.6}
                                        imageClassName="contact-image-container h-full w-full"
                                        renderWrapper={({ children }) => {
                                            return (
                                                <div className="float-left mr-5 mt-1 sm:float-none h-full sm:mr-0 sm:mt-0">
                                                    {children}
                                                </div>
                                            )}}
                                        />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
    )
}

//=============================
// Brick Schema
//=============================
CustomContactUs.schema = {
    name: 'custom-contact-us',
    label: 'Custom Contact Us',
    previewImageUrl: `/bricks-preview-images/custom-hero-unit.png`,
    getDefaultProps: () => ({
        padding: 'usePadding',
        title: 'This is the title',
        subtitle: 'This is a subtitle',
        address: 'This is the address',
        description: "type your opening place here",
        email: "mail@yourhost",
        openingTime: "08:00 - 17:00",
        button1: "Here's a button 1",
        button2: "Here's a button 2",
        linkText: "Here's a button 1",
        linkText2: "Here's a button 2",
    }),
    sideEditProps: [
        {
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
        },
        {
            name: 'withLink1',
            label: 'Use Button 1',
            type: types.SideEditPropType.Boolean,
        }, 
        {
            name: 'linkPath1',
            label: 'Link go to',
            type: types.SideEditPropType.Text,
            show: ({ withLink1 }) => !!withLink1,
        },
        {
            name: 'withLink2',
            label: 'Use Button 2',
            type: types.SideEditPropType.Boolean,
        }, 
        {
            name: 'linkPath2',
            label: 'Link go to',
            type: types.SideEditPropType.Text,
            show: ({ withLink2 }) => !!withLink2,
        },
    ],
}

export default CustomContactUs
