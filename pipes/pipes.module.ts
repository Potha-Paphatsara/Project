import { NgModule } from '@angular/core';
import { FormattedPricePipe } from './formatted-price.pipe';
import { ProductFilterPipe } from './product-filter.pipe.';
@NgModule({
	declarations: [FormattedPricePipe,ProductFilterPipe],
	imports: [],
	exports: [FormattedPricePipe,ProductFilterPipe]
})
export class PipesModule {}
