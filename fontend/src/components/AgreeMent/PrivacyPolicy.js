import React from "react";
import "./PrivacyPolicy.css"

const PrivacyPolicy = ({ dispalyState,  servicesClose }) => {

    const close = () => {
        servicesClose() 
    }

    return (
        <div hidden={dispalyState}>
            <div className="modal-background d-flex align-center" onClick={close}>
                <div className="modal-card" id="services-dialog">
                    <h3 className="mb-24 mt-24">Terms of Services</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu nulla tortor. Nullam ac ullamcorper mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas imperdiet at nibh a mattis. Aliquam lobortis tellus nec sodales malesuada. Nunc efficitur ipsum at hendrerit lobortis. Praesent semper nisi interdum tincidunt sollicitudin. Nulla pretium pulvinar sapien, non tincidunt dui lobortis vitae. Sed magna nunc, placerat quis lorem eu, porta ultricies orci. Cras ac diam quis enim porttitor malesuada in sit amet enim. Nunc mattis libero a varius placerat. Nullam sit amet lectus hendrerit, iaculis neque vitae, luctus ipsum. Praesent eget bibendum nunc. Fusce vitae vestibulum nunc. Proin lobortis, dolor at ullamcorper egestas, risus odio condimentum orci, vel dictum metus dolor quis turpis.
                    </p>
                    <br />
                    <p>
                        Suspendisse potenti. Donec sed nisl ultricies, bibendum tortor a, posuere erat. Pellentesque convallis non ante id malesuada. In finibus nisl sit amet ligula cursus vestibulum. Mauris imperdiet, dui nec interdum ultricies, libero urna porttitor mauris, consequat luctus nisl lectus non urna. Fusce ultricies magna id semper tempus. Donec lacinia tincidunt orci, vehicula vulputate leo venenatis ac. Sed faucibus gravida vulputate. Nullam pulvinar, diam vitae placerat dapibus, sem urna tincidunt orci, eget tempus mi purus vitae nunc. Pellentesque vel nulla eget purus feugiat ultricies. Curabitur ac urna at sapien commodo facilisis. Nam sit amet lorem ex. Ut finibus erat ut urna blandit fringilla.
                    </p>
                    <br />
                    <p>
                        Proin sit amet enim eget lorem feugiat cursus vel vel tortor. Sed risus lacus, vulputate vel pulvinar hendrerit, congue sodales dui. Pellentesque fringilla, sapien vitae euismod varius, ex risus interdum augue, vitae egestas nisl dui id leo. Donec pulvinar cursus nunc, eu placerat enim bibendum vitae. Morbi eget turpis eget erat dignissim bibendum sed sed ante. Curabitur porttitor ipsum est, id tempus odio egestas nec. Ut viverra mattis ligula, tempor facilisis libero rhoncus ut. Integer efficitur imperdiet diam eu lobortis. Morbi sagittis lacus molestie suscipit dapibus. Nulla volutpat nec turpis ut ultrices. Vivamus vestibulum, urna ac facilisis tempus, nunc dolor vestibulum tellus, eget varius erat nunc vel nulla. Aenean molestie accumsan quam commodo lacinia. Aliquam dictum tristique tortor id rutrum. Maecenas quis nisi nec ligula efficitur pharetra a quis massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ullamcorper ullamcorper magna, in sagittis purus.
                    </p>
                    <br />
                    <p>
                        Integer sed sapien risus. Fusce vel sollicitudin lectus. Fusce ante sem, varius quis odio eget, mollis tincidunt magna. Duis id lorem vitae tellus sollicitudin pulvinar. Vestibulum elementum consequat odio, eget pulvinar tellus dignissim sed. Integer nisl nulla, fermentum ac feugiat ut, tincidunt eu erat. Phasellus vel efficitur elit. Phasellus sagittis dui vitae cursus suscipit. Mauris pulvinar mattis arcu eget tempus. Curabitur sit amet nibh consectetur, porta enim eget, condimentum metus. Quisque fringilla nisi sed nibh pretium, ac consectetur nunc ornare. Suspendisse efficitur magna dolor, ac sollicitudin mi consequat id. Aenean at leo at enim dapibus egestas. Phasellus posuere est feugiat, hendrerit diam eu, feugiat felis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam ipsum lacus, pharetra vel rhoncus eu, laoreet eget tortor.
                    </p>
                    <br />
                    <p>
                        Fusce sollicitudin ut magna eu vulputate. Aliquam eleifend mollis eros eu pellentesque. In maximus arcu non dolor condimentum, at placerat mauris scelerisque. Duis et arcu sapien. Morbi vulputate arcu ante, eget accumsan dolor placerat id. Nulla facilisi. Curabitur vitae nunc ullamcorper, tincidunt elit in, vestibulum tortor. Curabitur dictum sem augue. Cras nisl ante, rutrum vel congue eget, vestibulum et dui. Curabitur euismod placerat leo at hendrerit.
                    </p>
                    <div className="text-center">
                        <button id="btn-close" className="btn text-center text-center h-40 mt-24 mb-24" onClick={close}>Close</button>
                    </div>
                </div>
            </div>
        </div>

    );


}

export default PrivacyPolicy;


