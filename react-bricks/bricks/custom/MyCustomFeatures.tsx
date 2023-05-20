import { Image, RichText, Text, Repeater, types } from 'react-bricks/frontend'
import Container from '../react-bricks-ui/shared/components/Container'
import blockNames from '../react-bricks-ui/blockNames'
import features from './FeatureItem'
import classNames from 'classnames'
import { icons } from '../react-bricks-ui/shared/defaultImages'
import {
    LayoutProps,
} from '../react-bricks-ui/LayoutSideProps'

//=============================
// Local Types
//=============================
export type ColsNumber = '2' | '3' | '4'

const getColumnClass = (colsNumber: ColsNumber) => {
    switch (colsNumber) {
        case '2':
            return 'sm:flex-[0_1_45%] mb-12 sm:mb-16'
        case '3':
            return 'sm:flex-[0_1_27%] mb-12 sm:mb-16'
        case '4':
            return 'sm:flex-[0_1_45%] lg:flex-[0_1_20.1%] mb-12 sm:mb-16'
    }
}

interface FeaturesProps extends LayoutProps {
    colsNumber: ColsNumber
}

//=============================
// Component to be rendered
//=============================
const MyCustomFeatures: types.Brick<FeaturesProps> = ({ 
    colsNumber,
    paddingTop,
    paddingBottom,
}) => {
    return (
        <>
            <div className="flex flex-wrap ">
                <div className="w-full clients">
                    
                    <Container
                        size={colsNumber === '2' ? 'small' : 'medium'}
                        paddingTop={paddingTop}
                        paddingBottom={paddingBottom}
                        className={classNames(`flex flex-wrap justify-between`, getColumnClass(colsNumber))}
                    >
                        <Repeater propName="features" itemProps={{ colsNumber: colsNumber }} />
                        <Image 
                            propName="image"
                            alt="feature"
                            aspectRatio={1.5}
                            imageClassName="block w-12 h-12 object-contain"
                            renderWrapper={({ children }) => {
                            return (
                                <div className="float-left mr-5 mt-1 sm:float-none sm:mr-0 sm:mt-0 sm:mb-5">
                                    {children}
                                </div>
                            )
                        }} />
                    </Container>
                    <div className="flex justify-evenly py-4 items-center client-wrapper">
                        
                    </div>
                </div>
            </div>
        </>
    )
}

//=============================
// Brick Schema
//=============================
MyCustomFeatures.schema = {
    name: 'my-custom-features',
    label: 'My Custom Features',
    previewImageUrl: `/bricks-preview-images/custom-hero-unit.png`,
    getDefaultProps: () => ({
        colsNumber: '2',
        image: icons.PHOTO_STACK,
        features: [
            {
                image: icons.PHOTO_STACK,
            },
            {
                image: icons.MIND_MAP,
            },
            {
                image: icons.RADAR_PLOT,
            },
            {
                image: icons.DATABASE,
            },
        ],
    }),
    repeaterItems: [
        {
            name: 'features',
            itemType: blockNames.FeatureItem,
            itemLabel: 'Feature',
            min: 0,
            max: 9,
        },
    ],
    sideEditProps: [{
        groupName: 'Columns',
        defaultOpen: true,
        props: [
            {
            name: 'colsNumber',
            label: 'Columns number',
            type: types.SideEditPropType.Select,
            selectOptions: {
                display: types.OptionsDisplay.Radio,
                options: [
                    { value: '2', label: '2 columns' },
                    { value: '3', label: '3 columns' },
                    { value: '4', label: '4 columns' },
                ],
            },
            },
        ],
    }],
}

export default MyCustomFeatures
