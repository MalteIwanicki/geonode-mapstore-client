define(["./defaultValue-81eec7ed","./Transforms-dca21951","./Matrix2-37e55508","./RuntimeError-8952249c","./ComponentDatatype-a15c9a19","./FrustumGeometry-ab531edc","./GeometryAttribute-cc3a5bc9","./GeometryAttributes-32b29525","./_commonjsHelpers-3aae1032-26891ab7","./combine-3c023bda","./WebGLConstants-508b9636","./Plane-6ee42cab","./VertexFormat-a0b706b0"],(function(e,t,r,n,a,u,i,o,c,s,p,m,d){"use strict";function h(n){const a=n.frustum,i=n.orientation,o=n.origin,c=e.defaultValue(n._drawNearPlane,!0);let s,p;a instanceof u.PerspectiveFrustum?(s=0,p=u.PerspectiveFrustum.packedLength):a instanceof u.OrthographicFrustum&&(s=1,p=u.OrthographicFrustum.packedLength),this._frustumType=s,this._frustum=a.clone(),this._origin=r.Cartesian3.clone(o),this._orientation=t.Quaternion.clone(i),this._drawNearPlane=c,this._workerName="createFrustumOutlineGeometry",this.packedLength=2+p+r.Cartesian3.packedLength+t.Quaternion.packedLength}h.pack=function(n,a,i){i=e.defaultValue(i,0);const o=n._frustumType,c=n._frustum;return a[i++]=o,0===o?(u.PerspectiveFrustum.pack(c,a,i),i+=u.PerspectiveFrustum.packedLength):(u.OrthographicFrustum.pack(c,a,i),i+=u.OrthographicFrustum.packedLength),r.Cartesian3.pack(n._origin,a,i),i+=r.Cartesian3.packedLength,t.Quaternion.pack(n._orientation,a,i),a[i+=t.Quaternion.packedLength]=n._drawNearPlane?1:0,a};const f=new u.PerspectiveFrustum,l=new u.OrthographicFrustum,g=new t.Quaternion,_=new r.Cartesian3;return h.unpack=function(n,a,i){a=e.defaultValue(a,0);const o=n[a++];let c;0===o?(c=u.PerspectiveFrustum.unpack(n,a,f),a+=u.PerspectiveFrustum.packedLength):(c=u.OrthographicFrustum.unpack(n,a,l),a+=u.OrthographicFrustum.packedLength);const s=r.Cartesian3.unpack(n,a,_);a+=r.Cartesian3.packedLength;const p=t.Quaternion.unpack(n,a,g),m=1===n[a+=t.Quaternion.packedLength];if(!e.defined(i))return new h({frustum:c,origin:s,orientation:p,_drawNearPlane:m});const d=o===i._frustumType?i._frustum:void 0;return i._frustum=c.clone(d),i._frustumType=o,i._origin=r.Cartesian3.clone(s,i._origin),i._orientation=t.Quaternion.clone(p,i._orientation),i._drawNearPlane=m,i},h.createGeometry=function(e){const r=e._frustumType,n=e._frustum,c=e._origin,s=e._orientation,p=e._drawNearPlane,m=new Float64Array(24);u.FrustumGeometry._computeNearFarPlanes(c,s,r,n,m);const d=new o.GeometryAttributes({position:new i.GeometryAttribute({componentDatatype:a.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:m})});let h,f;const l=p?2:1,g=new Uint16Array(8*(l+1));let _=p?0:1;for(;_<2;++_)h=p?8*_:0,f=4*_,g[h]=f,g[h+1]=f+1,g[h+2]=f+1,g[h+3]=f+2,g[h+4]=f+2,g[h+5]=f+3,g[h+6]=f+3,g[h+7]=f;for(_=0;_<2;++_)h=8*(l+_),f=4*_,g[h]=f,g[h+1]=f+4,g[h+2]=f+1,g[h+3]=f+5,g[h+4]=f+2,g[h+5]=f+6,g[h+6]=f+3,g[h+7]=f+7;return new i.Geometry({attributes:d,indices:g,primitiveType:i.PrimitiveType.LINES,boundingSphere:t.BoundingSphere.fromVertices(m)})},function(t,r){return e.defined(r)&&(t=h.unpack(t,r)),h.createGeometry(t)}}));
