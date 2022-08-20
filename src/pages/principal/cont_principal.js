import {CompCoverPage} from "../../comps/comp_cover_page";
import {ViewPrincipal} from "./view_principal";

export const ContPrincipal = props => {
    return(
      <>
          <CompCoverPage display={'none'}>
              <ViewPrincipal/>
          </CompCoverPage>
      </>
    );
}