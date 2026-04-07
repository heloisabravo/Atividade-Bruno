import { StyleSheet, View } from "react-native"

type PageViewsProps ={
    children: React.ReactNode
}

const PageViews = ({children}: PageViewsProps) =>{
return <View style = {estilo.pagina}>{children}</View>
};

const estilo= StyleSheet.create({
    pagina:{
flex:1,
justifyContent: "center",
alignItems:"center",
flexDirection:"column",
 },
});

export default PageViews ;